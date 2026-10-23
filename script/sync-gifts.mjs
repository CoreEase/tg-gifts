import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GIFTS_DIR = path.join(ROOT, 'gifts');
const API_OUTPUT_DIR = path.join(ROOT, 'docs', 'api', 'v1');
const UPSTREAM = (process.env.GIFTS_API_BASE || 'https://api.changes.tg').replace(/\/+$/, '');
const REPOSITORY = process.env.GITHUB_REPOSITORY || 'CoreEase/tg-gifts';
const [OWNER, REPO] = REPOSITORY.split('/');
const PAGES_BASE = (process.env.GITHUB_PAGES_BASE_URL || `https://${OWNER.toLowerCase()}.github.io/${REPO.toLowerCase()}`).replace(/\/+$/, '');
const ASSET_BASE = (process.env.ASSET_PUBLIC_BASE_URL || `https://raw.githubusercontent.com/${OWNER}/${REPO}/main`).replace(/\/+$/, '');
const CONCURRENCY = Math.max(1, Math.min(16, Number.parseInt(process.env.ASSET_DOWNLOAD_CONCURRENCY || '6', 10) || 6));
const REFRESH = process.argv.includes('--refresh');
const CHECK_ONLY = process.argv.includes('--check-only');
const HELP = process.argv.includes('--help') || process.argv.includes('-h');

if (HELP) {
  console.log(`Usage: node script/sync-gifts.mjs [--check-only] [--refresh]\n\n--check-only  Fetch and validate the complete upstream catalog without changing files.\n--refresh     Re-download every model, pattern, and original asset.\n\nThe normal run synchronizes all upgradable gifts, validates the API snapshot,\ndownloads missing or invalid assets, formats TypeScript, and builds docs/api/v1.`);
  process.exit(0);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function nameKey(value) {
  return String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase('en-US');
}

function looseNameKey(value) {
  return nameKey(value).replace(/[\s_-]+/g, '');
}

function slugify(value) {
  return nameKey(value).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'item';
}

function compactSlug(value) {
  return nameKey(value).replace(/[^a-z0-9]+/g, '') || 'gift';
}

function hash(value) {
  return createHash('sha1').update(String(value)).digest('hex').slice(0, 8);
}

function delayFor(response, attempt) {
  const retryAfter = response?.headers?.get('retry-after');
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds)) return Math.min(seconds * 1000, 30_000);
    const date = Date.parse(retryAfter);
    if (Number.isFinite(date)) return Math.min(Math.max(0, date - Date.now()), 30_000);
  }
  return Math.min(500 * (2 ** attempt), 10_000) + Math.floor(Math.random() * 250);
}

async function fetchResponse(url, accept, attempts = 5) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    let response;
    try {
      response = await fetch(url, {
        headers: {
          accept,
          'user-agent': 'tg-gifts-weekly-sync/1.0 (https://github.com/CoreEase/tg-gifts)',
        },
        signal: AbortSignal.timeout(45_000),
      });
      if (response.ok) return response;
      const body = await response.text().catch(() => '');
      const error = new Error(`HTTP ${response.status} for ${url}${body ? `: ${body.slice(0, 240)}` : ''}`);
      if (response.status < 500 && response.status !== 429) throw Object.assign(error, { fatal: true });
      lastError = error;
      if (attempt + 1 < attempts) await delay(delayFor(response, attempt));
    } catch (error) {
      if (error.fatal) throw error;
      lastError = error;
      if (attempt + 1 < attempts) await delay(delayFor(response, attempt));
    }
  }
  throw lastError || new Error(`Request failed: ${url}`);
}

async function getJson(endpoint) {
  const response = await fetchResponse(`${UPSTREAM}${endpoint}`, 'application/json');
  return response.json();
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await fn(items[index], index);
    }
  }));
  return results;
}

function findMatchingBracket(source, openingIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = openingIndex; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error('Could not find the end of a TypeScript array.');
}

function readExportArray(source, exportName) {
  const marker = `export const ${exportName} = [`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return [];
  const start = markerIndex + marker.length - 1;
  const end = findMatchingBracket(source, start);
  try {
    return JSON.parse(source.slice(start, end + 1));
  } catch (error) {
    throw new Error(`Could not parse ${exportName} from TypeScript: ${error.message}`);
  }
}

function readExistingSummaries() {
  const source = fs.readFileSync(path.join(ROOT, 'index.ts'), 'utf8');
  const declaration = source.indexOf('export const collections');
  if (declaration < 0) throw new Error('index.ts has no collections array; refusing to replace the current catalog.');
  const assignment = source.indexOf('=', declaration);
  if (assignment < 0) throw new Error('index.ts has no collections initializer; refusing to replace the current catalog.');
  const opening = source.indexOf('[', assignment + 1);
  const end = findMatchingBracket(source, opening);
  const body = source.slice(opening + 1, end);
  const summaries = [];
  const pattern = /\{\s*slug:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"\s*,\s*count:\s*(null|-?\d+)\s*,\s*modelCount:\s*(\d+)\s*,\s*patternCount:\s*(\d+)\s*,\s*backdropCount:\s*(\d+)\s*,\s*inFragment:\s*(true|false)\s*,\s*original:\s*"([^"]+)"\s*\}/g;
  for (const match of body.matchAll(pattern)) {
    summaries.push({
      slug: match[1],
      name: match[2],
      count: match[3] === 'null' ? null : Number(match[3]),
      modelCount: Number(match[4]),
      patternCount: Number(match[5]),
      backdropCount: Number(match[6]),
      inFragment: match[7] === 'true',
      original: match[8],
    });
  }
  if (summaries.length === 0) throw new Error('Could not parse existing collection summaries from index.ts.');
  return summaries;
}

function readExistingGroup(slug) {
  const filePath = path.join(GIFTS_DIR, slug, 'index.ts');
  if (!fs.existsSync(filePath)) return { models: [], patterns: [], backdrops: [] };
  const source = fs.readFileSync(filePath, 'utf8');
  return {
    models: readExportArray(source, 'models'),
    patterns: readExportArray(source, 'patterns'),
    backdrops: readExportArray(source, 'backdrops'),
  };
}

function createLookup(items, label) {
  const exact = new Map();
  const loose = new Map();
  for (const item of items) {
    assert(item && typeof item.name === 'string' && item.name.trim(), `${label} contains an item without a name.`);
    const exactKey = nameKey(item.name);
    assert(!exact.has(exactKey), `${label} contains duplicate item name: ${item.name}`);
    exact.set(exactKey, item);
    const looseKey = looseNameKey(item.name);
    if (!loose.has(looseKey)) loose.set(looseKey, []);
    loose.get(looseKey).push(item);
  }
  return { exact, loose };
}

function matchItem(name, lookup) {
  const exact = lookup.exact.get(nameKey(name));
  if (exact) return exact;
  const matches = lookup.loose.get(looseNameKey(name)) || [];
  return matches.length === 1 ? matches[0] : null;
}

function assertSameNames(mainItems, emojiItems, label) {
  assert(Array.isArray(mainItems) && Array.isArray(emojiItems), `${label}: expected arrays from both API listings.`);
  assert(mainItems.length > 0, `${label}: API returned an empty list; refusing to treat it as a complete catalog.`);
  assert(mainItems.length === emojiItems.length, `${label}: primary and emoji lists disagree (${mainItems.length} vs ${emojiItems.length}).`);
  const lookup = createLookup(emojiItems, `${label} emoji list`);
  for (const item of mainItems) {
    assert(matchItem(item.name, lookup), `${label}: emoji metadata is missing for “${item.name}”.`);
  }
  return lookup;
}

function nullableNumber(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function normalizeModel(item, emojiItem, assets) {
  return {
    name: item.name,
    customEmojiId: typeof emojiItem?.customEmojiId === 'string' ? emojiItem.customEmojiId : null,
    rarityPermille: nullableNumber(item.rarityPermille),
    originalRarityPermille: nullableNumber(item.originalRarityPermille),
    rarity: nullableNumber(item.rarity),
    originalRarity: nullableNumber(item.originalRarity),
    ...(item.crafted === true ? { crafted: true, rarityTier: item.rarityTier ?? null } : {}),
    assets,
  };
}

function normalizePattern(item, emojiItem, assets) {
  return {
    name: item.name,
    customEmojiId: typeof emojiItem?.customEmojiId === 'string' ? emojiItem.customEmojiId : null,
    rarityPermille: nullableNumber(item.rarityPermille),
    originalRarityPermille: nullableNumber(item.originalRarityPermille),
    rarity: nullableNumber(item.rarity),
    originalRarity: nullableNumber(item.originalRarity),
    assets,
  };
}

function normalizeBackdrop(item, emojiItem = item) {
  assert(item.hex && typeof item.hex === 'object', `Backdrop “${item.name}” has no color palette.`);
  for (const key of ['centerColor', 'edgeColor', 'patternColor', 'textColor']) {
    assert(typeof item.hex[key] === 'string' && item.hex[key].startsWith('#'), `Backdrop “${item.name}” is missing ${key}.`);
  }
  return {
    name: item.name,
    backdropId: Number.isInteger(item.backdropId) ? item.backdropId : null,
    customEmojiId: typeof emojiItem?.customEmojiId === 'string' ? emojiItem.customEmojiId : null,
    centerColor: nullableNumber(item.centerColor),
    edgeColor: nullableNumber(item.edgeColor),
    patternColor: nullableNumber(item.patternColor),
    textColor: nullableNumber(item.textColor),
    hex: {
      centerColor: item.hex.centerColor,
      edgeColor: item.hex.edgeColor,
      patternColor: item.hex.patternColor,
      textColor: item.hex.textColor,
    },
    rarityPermille: nullableNumber(item.rarityPermille),
    originalRarityPermille: nullableNumber(item.originalRarityPermille),
    rarity: nullableNumber(item.rarity),
    originalRarity: nullableNumber(item.originalRarity),
  };
}

function safeAssetPath(relativePath) {
  assert(typeof relativePath === 'string' && relativePath.length > 0, 'Empty asset path.');
  const normalized = relativePath.replaceAll('\\', '/');
  assert(!normalized.startsWith('/') && !normalized.split('/').includes('..'), `Unsafe asset path: ${relativePath}`);
  const absolute = path.resolve(ROOT, normalized);
  assert(absolute.startsWith(`${ROOT}${path.sep}`), `Asset path escapes repository: ${relativePath}`);
  return absolute;
}

function existingStem(oldPath, expectedDir) {
  if (typeof oldPath !== 'string' || !oldPath.startsWith(`${expectedDir}/`)) return null;
  const extension = path.posix.extname(oldPath);
  if (!extension) return null;
  return path.posix.basename(oldPath, extension);
}

function chooseStem(name, oldPaths, directory, used) {
  let stem = oldPaths.map((oldPath) => existingStem(oldPath, directory)).find(Boolean) || slugify(name);
  if (used.has(stem)) stem = `${stem}-${hash(name)}`;
  let suffix = 2;
  while (used.has(stem)) stem = `${slugify(name)}-${hash(`${name}:${suffix++}`)}`;
  used.add(stem);
  return stem;
}

function buildAssetsForGroup(gift, slug, oldGroup) {
  const modelsLookup = createLookup(oldGroup.models, `Existing models for ${slug}`);
  const patternsLookup = createLookup(oldGroup.patterns, `Existing patterns for ${slug}`);
  const modelFiles = new Set();
  const patternFiles = new Set();
  const modelsMeta = gift.models.map((item) => {
    const previous = matchItem(item.name, modelsLookup);
    const directory = `gifts/${slug}/assets/models`;
    const stem = chooseStem(item.name, [previous?.assets?.svg, previous?.assets?.tgs], directory, modelFiles);
    const svg = `${directory}/${stem}.svg`;
    const tgs = `${directory}/${stem}.tgs`;
    return { raw: item, previous, paths: { svg, tgs } };
  });
  const patternsMeta = gift.symbols.map((item) => {
    const previous = matchItem(item.name, patternsLookup);
    const directory = `gifts/${slug}/assets/patterns`;
    const stem = chooseStem(item.name, [previous?.assets?.png], directory, patternFiles);
    const png = `${directory}/${stem}.png`;
    return { raw: item, previous, paths: { png } };
  });
  return { modelsMeta, patternsMeta };
}

function isValidAsset(filePath, kind) {
  try {
    const fd = fs.openSync(filePath, 'r');
    try {
      const bytes = Buffer.alloc(4096);
      const count = fs.readSync(fd, bytes, 0, bytes.length, 0);
      if (kind === 'svg') return count > 0 && bytes.subarray(0, count).toString('utf8').includes('<svg');
      if (kind === 'tgs') return count >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b;
      if (kind === 'png') return count >= 8 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      return count > 0;
    } finally {
      fs.closeSync(fd);
    }
  } catch {
    return false;
  }
}

function createAssetTasks(groups) {
  const tasks = [];
  for (const group of groups) {
    const original = group.summary.original;
    tasks.push({
      relativePath: original,
      kind: 'svg',
      url: `${UPSTREAM}/original/${encodeURIComponent(String(group.gift.id))}.svg`,
      label: `${group.gift.name} original`,
    });
    for (const { raw, paths } of group.modelsMeta) {
      const name = encodeURIComponent(raw.name);
      const giftId = encodeURIComponent(String(group.gift.id));
      tasks.push({ relativePath: paths.svg, kind: 'svg', url: `${UPSTREAM}/model/${giftId}/${name}.svg`, label: `${group.gift.name}/${raw.name} SVG` });
      tasks.push({ relativePath: paths.tgs, kind: 'tgs', url: `${UPSTREAM}/model/${giftId}/${name}.tgs`, label: `${group.gift.name}/${raw.name} TGS` });
    }
    for (const { raw, paths } of group.patternsMeta) {
      const name = encodeURIComponent(raw.name);
      const giftId = encodeURIComponent(String(group.gift.id));
      tasks.push({ relativePath: paths.png, kind: 'png', url: `${UPSTREAM}/pattern/${giftId}/${name}.png`, label: `${group.gift.name}/${raw.name} PNG` });
    }
  }
  return tasks;
}

async function downloadTask(task) {
  const destination = safeAssetPath(task.relativePath);
  if (!REFRESH && isValidAsset(destination, task.kind)) return 'skipped';
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  let lastError;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    let response;
    try {
      response = await fetchResponse(task.url, task.kind === 'svg' ? 'image/svg+xml' : task.kind === 'png' ? 'image/png' : 'application/gzip');
      const data = Buffer.from(await response.arrayBuffer());
      const temporary = `${destination}.part-${process.pid}`;
      fs.writeFileSync(temporary, data);
      if (!isValidAsset(temporary, task.kind)) {
        fs.rmSync(temporary, { force: true });
        throw Object.assign(new Error(`Invalid ${task.kind.toUpperCase()} response for ${task.url}`), { fatal: true });
      }
      fs.renameSync(temporary, destination);
      return 'downloaded';
    } catch (error) {
      if (error.fatal) throw error;
      lastError = error;
      if (attempt < 4) await delay(delayFor(response, attempt));
    }
  }
  throw lastError || new Error(`Failed to download ${task.url}`);
}

async function downloadAll(tasks) {
  let cursor = 0;
  let completed = 0;
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  const failures = [];
  console.log(`Assets: ${tasks.length}; concurrency: ${CONCURRENCY}; refresh: ${REFRESH}; API: ${UPSTREAM}`);
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, tasks.length) }, async () => {
    while (true) {
      const index = cursor++;
      if (index >= tasks.length) return;
      const task = tasks[index];
      try {
        const status = await downloadTask(task);
        if (status === 'downloaded') downloaded += 1;
        else skipped += 1;
      } catch (error) {
        failed += 1;
        if (failures.length < 30) failures.push(`${task.label}: ${error.message}`);
      } finally {
        completed += 1;
        if (completed % 500 === 0 || completed === tasks.length) {
          console.log(`Progress ${completed}/${tasks.length}: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
        }
      }
    }
  }));
  console.log(`Finished assets: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
  if (failures.length) console.error(`Sample failures:\n${failures.map((line) => `- ${line}`).join('\n')}`);
  if (failed > 0) throw new Error(`${failed} asset downloads failed; generated data was not replaced. Re-run the sync to resume.`);
  return { downloaded, skipped, failed };
}

function writeIfChanged(filePath, content) {
  const normalized = content.endsWith('\n') ? content : `${content}\n`;
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === normalized) return false;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const temporary = `${filePath}.tmp-${process.pid}`;
  fs.writeFileSync(temporary, normalized, 'utf8');
  fs.renameSync(temporary, filePath);
  return true;
}

function writeJson(filePath, value) {
  return writeIfChanged(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function formatGroupModule(slug, giftId, models, patterns, backdrops) {
  return [
    `import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';`,
    `export const giftId = ${JSON.stringify(String(giftId))} as const;`,
    `export const models = ${JSON.stringify(models, null, 2)} satisfies readonly GiftModel[];`,
    `export const patterns = ${JSON.stringify(patterns, null, 2)} satisfies readonly GiftPattern[];`,
    `export const backdrops = ${JSON.stringify(backdrops, null, 2)} satisfies readonly Backdrop[];`,
    `export const collection = { slug: ${JSON.stringify(slug)}, models, patterns, backdrops } satisfies GiftCollection;`,
    `export default collection;`,
  ].join('\n\n') + '\n';
}

function formatRootModule(backdrops, summaries) {
  const summaryLines = summaries.map((item) => `  { slug: ${JSON.stringify(item.slug)}, name: ${JSON.stringify(item.name)}, count: ${item.count === null ? 'null' : item.count}, modelCount: ${item.modelCount}, patternCount: ${item.patternCount}, backdropCount: ${item.backdropCount}, inFragment: ${item.inFragment}, original: ${JSON.stringify(item.original)} },`).join('\n');
  return [
    `export type { Backdrop, CollectionSummary, GiftCollection, GiftModel, GiftPattern } from './types.js';`,
    `import type { Backdrop, CollectionSummary } from './types.js';`,
    `export const backdrops = ${JSON.stringify(backdrops, null, 2)} satisfies readonly Backdrop[];`,
    `export const collections = [\n${summaryLines}\n] satisfies readonly CollectionSummary[];`,
  ].join('\n\n') + '\n';
}

function safePublicUrl(base, relativePath) {
  return `${base}/${relativePath.split('/').map(encodeURIComponent).join('/')}`;
}

function assignItemSlugs(items) {
  const used = new Set();
  return items.map((item) => {
    let slug = slugify(item.name);
    if (used.has(slug)) slug = `${slug}-${hash(`${item.name}:${item.customEmojiId || ''}`)}`;
    let counter = 2;
    while (used.has(slug)) slug = `${slugify(item.name)}-${counter++}`;
    used.add(slug);
    return { ...item, slug };
  });
}

function cleanupStaleJson(directory, expectedNames) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
    if (!expectedNames.has(entry.name)) fs.rmSync(path.join(directory, entry.name), { force: true });
  }
}

function apiModel(item, slug, gift, giftApiPath) {
  const self = `${giftApiPath}/models/${item.slug}.json`;
  return {
    type: 'model',
    slug: item.slug,
    name: item.name,
    customEmojiId: item.customEmojiId,
    rarityPermille: item.rarityPermille,
    originalRarityPermille: item.originalRarityPermille,
    rarity: item.rarity,
    originalRarity: item.originalRarity,
    ...(item.crafted ? { crafted: true, rarityTier: item.rarityTier } : {}),
    gift: { slug, name: gift.name, id: String(gift.id) },
    imageUrl: safePublicUrl(ASSET_BASE, item.assets.svg),
    animationUrl: safePublicUrl(ASSET_BASE, item.assets.tgs),
    assets: {
      svg: safePublicUrl(ASSET_BASE, item.assets.svg),
      tgs: safePublicUrl(ASSET_BASE, item.assets.tgs),
    },
    url: `${PAGES_BASE}/api/v1/${self}`,
  };
}

function apiPattern(item, slug, gift, giftApiPath) {
  const self = `${giftApiPath}/patterns/${item.slug}.json`;
  const imageUrl = safePublicUrl(ASSET_BASE, item.assets.png);
  return {
    type: 'pattern',
    slug: item.slug,
    name: item.name,
    customEmojiId: item.customEmojiId,
    rarityPermille: item.rarityPermille,
    originalRarityPermille: item.originalRarityPermille,
    rarity: item.rarity,
    originalRarity: item.originalRarity,
    gift: { slug, name: gift.name, id: String(gift.id) },
    imageUrl,
    assets: { png: imageUrl },
    url: `${PAGES_BASE}/api/v1/${self}`,
  };
}

function apiBackdrop(item, slug, gift, giftApiPath) {
  const self = `${giftApiPath}/backdrops/${item.slug}.json`;
  return {
    type: 'backdrop',
    slug: item.slug,
    name: item.name,
    backdropId: item.backdropId,
    customEmojiId: item.customEmojiId,
    centerColor: item.centerColor,
    edgeColor: item.edgeColor,
    patternColor: item.patternColor,
    textColor: item.textColor,
    hex: item.hex,
    rarityPermille: item.rarityPermille,
    originalRarityPermille: item.originalRarityPermille,
    rarity: item.rarity,
    originalRarity: item.originalRarity,
    imageUrl: null,
    gift: { slug, name: gift.name, id: String(gift.id) },
    url: `${PAGES_BASE}/api/v1/${self}`,
  };
}

function buildStaticApi(groups, globalBackdrops, sourceUpdatedAt) {
  const counts = {
    gifts: groups.length,
    models: groups.reduce((sum, group) => sum + group.modelsMeta.length, 0),
    patterns: groups.reduce((sum, group) => sum + group.patternsMeta.length, 0),
    backdrops: globalBackdrops.length,
  };
  const rootIndex = {
    version: '1.0.0',
    sourceUpdatedAt,
    counts,
    endpoints: {
      gifts: `${PAGES_BASE}/api/v1/gifts.json`,
      globalBackdrops: `${PAGES_BASE}/api/v1/backdrops.json`,
      gift: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/index.json`,
      models: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/models.json`,
      modelByName: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/models/{model-slug}.json`,
      backdrops: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/backdrops.json`,
      backdropByName: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/backdrops/{backdrop-slug}.json`,
      patterns: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/patterns.json`,
      patternByName: `${PAGES_BASE}/api/v1/gifts/{gift-slug}/patterns/{pattern-slug}.json`,
    },
  };
  writeJson(path.join(API_OUTPUT_DIR, 'index.json'), rootIndex);

  const giftSummaries = [];
  const activeSlugs = new Set();
  for (const group of groups) {
    const slug = group.summary.slug;
    activeSlugs.add(slug);
    const giftApiPath = `gifts/${slug}`;
    const apiUrl = `${PAGES_BASE}/api/v1/${giftApiPath}/index.json`;
    const originalUrl = safePublicUrl(ASSET_BASE, group.summary.original);
    const models = assignItemSlugs(group.models.map((item) => ({ ...item })));
    const patterns = assignItemSlugs(group.patterns.map((item) => ({ ...item })));
    const backdrops = assignItemSlugs(group.backdrops.map((item) => ({ ...item })));
    const modelsApi = models.map((item) => apiModel(item, slug, group.gift, giftApiPath));
    const patternsApi = patterns.map((item) => apiPattern(item, slug, group.gift, giftApiPath));
    const backdropsApi = backdrops.map((item) => apiBackdrop(item, slug, group.gift, giftApiPath));
    const summary = {
      slug,
      name: group.summary.name,
      apiName: group.gift.name,
      id: String(group.gift.id),
      count: group.summary.count,
      modelCount: models.length,
      patternCount: patterns.length,
      backdropCount: backdrops.length,
      inFragment: group.summary.inFragment,
      imageUrl: originalUrl,
      originalUrl,
      url: apiUrl,
      modelsUrl: `${PAGES_BASE}/api/v1/${giftApiPath}/models.json`,
      backdropsUrl: `${PAGES_BASE}/api/v1/${giftApiPath}/backdrops.json`,
      patternsUrl: `${PAGES_BASE}/api/v1/${giftApiPath}/patterns.json`,
    };
    giftSummaries.push(summary);
    const giftData = {
      ...summary,
      gift: group.gift,
      models: modelsApi,
      backdrops: backdropsApi,
      patterns: patternsApi,
    };
    writeJson(path.join(API_OUTPUT_DIR, giftApiPath, 'index.json'), giftData);
    writeJson(path.join(API_OUTPUT_DIR, giftApiPath, 'models.json'), { gift: summary, count: modelsApi.length, items: modelsApi });
    writeJson(path.join(API_OUTPUT_DIR, giftApiPath, 'backdrops.json'), { gift: summary, count: backdropsApi.length, items: backdropsApi });
    writeJson(path.join(API_OUTPUT_DIR, giftApiPath, 'patterns.json'), { gift: summary, count: patternsApi.length, items: patternsApi });

    const modelsDir = path.join(API_OUTPUT_DIR, giftApiPath, 'models');
    const patternsDir = path.join(API_OUTPUT_DIR, giftApiPath, 'patterns');
    const backdropsDir = path.join(API_OUTPUT_DIR, giftApiPath, 'backdrops');
    const keepModels = new Set();
    const keepPatterns = new Set();
    const keepBackdrops = new Set();
    modelsApi.forEach((item) => {
      const file = `${item.slug}.json`;
      keepModels.add(file);
      writeJson(path.join(modelsDir, file), item);
    });
    patternsApi.forEach((item) => {
      const file = `${item.slug}.json`;
      keepPatterns.add(file);
      writeJson(path.join(patternsDir, file), item);
    });
    backdropsApi.forEach((item) => {
      const file = `${item.slug}.json`;
      keepBackdrops.add(file);
      writeJson(path.join(backdropsDir, file), item);
    });
    cleanupStaleJson(modelsDir, keepModels);
    cleanupStaleJson(patternsDir, keepPatterns);
    cleanupStaleJson(backdropsDir, keepBackdrops);
  }

  const giftsIndex = {
    count: giftSummaries.length,
    items: giftSummaries,
  };
  writeJson(path.join(API_OUTPUT_DIR, 'gifts.json'), giftsIndex);
  const globalApiBackdrops = globalBackdrops.map((item) => ({
    ...item,
    slug: slugify(item.name),
    imageUrl: null,
  }));
  writeJson(path.join(API_OUTPUT_DIR, 'backdrops.json'), {
    count: globalApiBackdrops.length,
    items: globalApiBackdrops,
  });

  const giftsApiDir = path.join(API_OUTPUT_DIR, 'gifts');
  if (fs.existsSync(giftsApiDir)) {
    for (const entry of fs.readdirSync(giftsApiDir, { withFileTypes: true })) {
      if (entry.isDirectory() && !activeSlugs.has(entry.name)) {
        fs.rmSync(path.join(giftsApiDir, entry.name), { recursive: true, force: true });
      }
    }
  }
  return counts;
}

async function discoverCatalog() {
  const [total, giftNames, backdropList, health] = await Promise.all([
    getJson('/total'),
    getJson('/gifts'),
    getJson('/backdrops'),
    getJson('/health').catch(() => null),
  ]);
  assert(total && total.gifts && Number.isInteger(total.gifts.upgradable), 'Upstream /total response has no upgradable gift count.');
  assert(Array.isArray(giftNames) && giftNames.length > 0, 'Upstream /gifts did not return a non-empty array.');
  assert(giftNames.length === total.gifts.upgradable, `/gifts count (${giftNames.length}) does not match /total upgradable count (${total.gifts.upgradable}).`);
  assert(new Set(giftNames.map(nameKey)).size === giftNames.length, 'Upstream /gifts contains duplicate names.');
  assert(Array.isArray(backdropList) && backdropList.length === total.backdrops, `/backdrops count (${backdropList?.length}) does not match /total (${total.backdrops}).`);

  const giftsData = await mapLimit(giftNames, 5, async (giftName) => {
    const endpoint = `/gift/${encodeURIComponent(giftName)}`;
    const data = await getJson(endpoint);
    assert(data && data.gift && data.gift.name && data.gift.id, `${endpoint} returned incomplete gift details.`);
    assert(Array.isArray(data.models) && Array.isArray(data.backdrops) && Array.isArray(data.symbols), `${endpoint} is missing one or more variant lists.`);
    let emoji = data.emoji;
    if (!emoji || !Array.isArray(emoji.models) || !Array.isArray(emoji.backdrops) || !Array.isArray(emoji.patterns)) {
      emoji = await getJson(`/emoji/${encodeURIComponent(giftName)}`);
    }
    assert(emoji && Array.isArray(emoji.models) && Array.isArray(emoji.backdrops) && Array.isArray(emoji.patterns), `${endpoint} has no complete emoji metadata.`);
    const modelEmoji = assertSameNames(data.models, emoji.models, `${giftName} models`);
    const backdropEmoji = assertSameNames(data.backdrops, emoji.backdrops, `${giftName} backdrops`);
    const patternEmoji = assertSameNames(data.symbols, emoji.patterns, `${giftName} patterns`);
    for (const item of data.models) assert(item && typeof item.name === 'string', `${giftName} has an invalid model record.`);
    for (const item of data.symbols) assert(item && typeof item.name === 'string', `${giftName} has an invalid pattern record.`);
    for (const item of data.backdrops) normalizeBackdrop(item, matchItem(item.name, backdropEmoji));
    return { gift: data.gift, models: data.models, backdrops: data.backdrops, symbols: data.symbols, modelEmoji, backdropEmoji, patternEmoji };
  });

  const modelTotal = giftsData.reduce((sum, gift) => sum + gift.models.length, 0);
  const patternTotal = giftsData.reduce((sum, gift) => sum + gift.symbols.length, 0);
  assert(modelTotal === total.models, `Per-gift model count (${modelTotal}) does not match /total (${total.models}).`);
  assert(patternTotal === total.patterns, `Per-gift pattern count (${patternTotal}) does not match /total (${total.patterns}).`);
  const globalBackdrops = backdropList.map((item) => normalizeBackdrop(item, item));
  const backdropIds = new Set(globalBackdrops.map((item) => item.backdropId).filter((id) => id !== null));
  assert(backdropIds.size === total.backdrops, `Global backdrop IDs (${backdropIds.size}) do not match /total (${total.backdrops}).`);

  const previousSummaries = readExistingSummaries();
  const summariesBySlug = new Map(previousSummaries.map((item) => [item.slug, item]));
  const groups = [];
  const usedSlugs = new Set();
  for (const data of giftsData) {
    let slug = compactSlug(data.gift.name);
    if (usedSlugs.has(slug)) slug = `${slug}-${String(data.gift.id)}`;
    let suffix = 2;
    while (usedSlugs.has(slug)) slug = `${compactSlug(data.gift.name)}-${suffix++}`;
    usedSlugs.add(slug);
    const existingSummary = summariesBySlug.get(slug) || previousSummaries.find((item) => nameKey(item.name) === nameKey(data.gift.name)) || null;
    const original = existingSummary?.original && existingSummary.original.startsWith(`gifts/${slug}/`)
      ? existingSummary.original
      : `gifts/${slug}/original.svg`;
    const summary = {
      slug,
      name: existingSummary?.name || data.gift.name,
      count: existingSummary?.count ?? null,
      modelCount: data.models.length,
      patternCount: data.symbols.length,
      backdropCount: data.backdrops.length,
      inFragment: existingSummary?.inFragment ?? false,
      original,
    };
    const oldGroup = readExistingGroup(slug);
    const { modelsMeta, patternsMeta } = buildAssetsForGroup(data, slug, oldGroup);
    const models = modelsMeta.map(({ raw, previous, paths }) => normalizeModel(raw, matchItem(raw.name, data.modelEmoji), paths));
    const patterns = patternsMeta.map(({ raw, previous, paths }) => normalizePattern(raw, matchItem(raw.name, data.patternEmoji), paths));
    const backdrops = data.backdrops.map((raw) => normalizeBackdrop(raw, matchItem(raw.name, data.backdropEmoji)));
    groups.push({ gift: data.gift, summary, modelsMeta, patternsMeta, models, patterns, backdrops });
  }
  groups.sort((a, b) => a.summary.slug.localeCompare(b.summary.slug));
  const currentBackdropTotal = giftsData.reduce((sum, gift) => sum + gift.backdrops.length, 0);
  console.log(`Verified upstream snapshot: gifts=${groups.length}, models=${modelTotal}, per-gift-backdrops=${currentBackdropTotal}, unique-backdrops=${globalBackdrops.length}, patterns=${patternTotal}.`);
  return { total, groups, globalBackdrops, health };
}

function checkMissingAssets(tasks) {
  const missing = tasks.filter((task) => !isValidAsset(safeAssetPath(task.relativePath), task.kind));
  const byKind = Object.fromEntries(['svg', 'tgs', 'png'].map((kind) => [kind, missing.filter((task) => task.kind === kind).length]));
  console.log(`Check only: missing or invalid assets=${missing.length}; ${JSON.stringify(byKind)}.`);
  if (missing.length) console.log(`First missing files:\n${missing.slice(0, 15).map((task) => `- ${task.relativePath}`).join('\n')}`);
}

async function main() {
  assert(OWNER && REPO, 'GITHUB_REPOSITORY must have the OWNER/REPOSITORY format.');
  assert(fs.existsSync(GIFTS_DIR), `Missing gifts directory: ${GIFTS_DIR}`);
  console.log(`Sync base: ${ROOT}; API: ${UPSTREAM}; Pages base: ${PAGES_BASE}; asset base: ${ASSET_BASE}`);
  const catalog = await discoverCatalog();
  const tasks = createAssetTasks(catalog.groups);
  if (CHECK_ONLY) {
    checkMissingAssets(tasks);
    return;
  }
  const assetStats = await downloadAll(tasks);

  const summaryIndex = catalog.groups.map((group) => group.summary);
  for (const group of catalog.groups) {
    const filePath = path.join(GIFTS_DIR, group.summary.slug, 'index.ts');
    const giftId = group.gift.id;
    writeIfChanged(filePath, formatGroupModule(group.summary.slug, giftId, group.models, group.patterns, group.backdrops));
  }
  writeIfChanged(path.join(ROOT, 'index.ts'), formatRootModule(catalog.globalBackdrops, summaryIndex));

  const sourceUpdatedAt = catalog.health?.starGiftsUpdatedAt || catalog.health?.slugsUpdatedAt || null;
  const apiCounts = buildStaticApi(catalog.groups, catalog.globalBackdrops, sourceUpdatedAt);
  console.log(`Generated static API in docs/api/v1: gifts=${apiCounts.gifts}, models=${apiCounts.models}, patterns=${apiCounts.patterns}, global-backdrops=${apiCounts.backdrops}.`);
  console.log(`Sync complete: downloaded=${assetStats.downloaded}, skipped=${assetStats.skipped}, API base=${PAGES_BASE}/api/v1.`);
}

main().catch((error) => {
  console.error(`Sync failed: ${error.stack || error.message}`);
  process.exitCode = 1;
});

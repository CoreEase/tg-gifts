#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const giftsDir = path.join(root, 'gifts');

function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'asset';
}
function readArray(source, key, typeName, filePath) {
  const prefix = `export const ${key} = `;
  const suffix = ` satisfies readonly ${typeName}[];`;
  const start = source.indexOf(prefix);
  if (start < 0) throw new Error(`Missing ${key} export in ${filePath}`);
  const dataStart = start + prefix.length;
  const end = source.indexOf(suffix, dataStart);
  if (end < 0) throw new Error(`Missing ${key} type assertion in ${filePath}`);
  const raw = source.slice(dataStart, end).trim();
  return { prefix, suffix, start, end, items: JSON.parse(raw) };
}
function attachAssets(items, slug, kind) {
  const used = new Set();
  return items.map((item, index) => {
    if (!item || typeof item.name !== 'string' || !item.name.trim()) {
      throw new Error(`Invalid ${kind} entry #${index} in ${slug}: missing name`);
    }
    const base = slugify(item.name);
    let stem = base;
    if (used.has(stem)) {
      const fallback = item.customEmojiId || createHash('sha256').update(`${item.name}\0${index}`).digest('hex').slice(0, 10);
      stem = `${base}-${slugify(fallback)}`;
    }
    let suffix = 1;
    while (used.has(stem)) stem = `${base}-${suffix++}`;
    used.add(stem);
    const dir = `gifts/${slug}/assets/${kind}`;
    const assets = kind === 'models'
      ? { svg: `${dir}/${stem}.svg`, tgs: `${dir}/${stem}.tgs` }
      : { png: `${dir}/${stem}.png` };
    return { ...item, assets };
  });
}

const groups = fs.readdirSync(giftsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
let modelCount = 0;
let patternCount = 0;
for (const slug of groups) {
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error(`Unsafe gift slug: ${slug}`);
  const relative = path.posix.join('gifts', slug, 'index.ts');
  const filePath = path.join(root, relative);
  let source = fs.readFileSync(filePath, 'utf8');
  const modelArray = readArray(source, 'models', 'GiftModel', relative);
  const patternArray = readArray(source, 'patterns', 'GiftPattern', relative);
  const models = attachAssets(modelArray.items, slug, 'models');
  const patterns = attachAssets(patternArray.items, slug, 'patterns');
  modelCount += models.length;
  patternCount += patterns.length;

  const replacements = [
    { parsed: modelArray, items: models, typeName: 'GiftModel' },
    { parsed: patternArray, items: patterns, typeName: 'GiftPattern' },
  ].sort((a, b) => b.parsed.start - a.parsed.start);
  for (const { parsed, items, typeName } of replacements) {
    const replacement = `${parsed.prefix}${JSON.stringify(items, null, 2)}${parsed.suffix}`;
    source = source.slice(0, parsed.start) + replacement + source.slice(parsed.end + parsed.suffix.length);
  }
  fs.writeFileSync(filePath, source.endsWith('\n') ? source : `${source}\n`);

  const manifest = {
    slug,
    models: models.map(({ name, assets }) => ({ name, assets })),
    patterns: patterns.map(({ name, assets }) => ({ name, assets })),
  };
  const manifestPath = path.join(giftsDir, slug, 'assets', 'manifest.json');
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}
console.log(`Attached asset paths for ${groups.length} gifts: ${modelCount} models and ${patternCount} patterns (${modelCount * 2 + patternCount} files).`);

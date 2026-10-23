import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const giftsDir = path.join(root, 'gifts');
const apiBase = (process.env.GIFTS_API_BASE || 'https://api.changes.tg').replace(/\/+$/, '');
const concurrency = Math.max(1, Math.min(16, Number.parseInt(process.env.ORIGINAL_DOWNLOAD_CONCURRENCY || '6', 10) || 6));
const refresh = process.argv.includes('--refresh');

const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const parsedLimit = limitArg ? Number.parseInt(limitArg.slice('--limit='.length), 10) : Infinity;
const limit = Number.isInteger(parsedLimit) && parsedLimit >= 0 ? parsedLimit : Infinity;

function isSvgValid(filePath) {
  try {
    const fd = fs.openSync(filePath, 'r');
    try {
      const buffer = Buffer.alloc(2048);
      const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
      if (bytesRead === 0) return false;
      return buffer.subarray(0, bytesRead).toString('utf8').includes('<svg');
    } finally {
      fs.closeSync(fd);
    }
  } catch {
    return false;
  }
}

function retryDelay(response, attempt) {
  const header = response?.headers?.get('retry-after');
  if (header) {
    const seconds = Number(header);
    if (Number.isFinite(seconds)) return Math.min(seconds * 1000, 30_000);
    const date = Date.parse(header);
    if (Number.isFinite(date)) return Math.min(Math.max(0, date - Date.now()), 30_000);
  }
  return Math.min(500 * (2 ** attempt), 10_000) + Math.floor(Math.random() * 250);
}

function listSlugs() {
  if (!fs.existsSync(giftsDir)) throw new Error(`Missing gifts directory: ${giftsDir}`);
  return fs.readdirSync(giftsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

async function fetchOriginal(slug) {
  const destination = path.join(giftsDir, slug, 'original.svg');

  if (!refresh && isSvgValid(destination)) return 'skipped';

  fs.mkdirSync(path.dirname(destination), { recursive: true });

  const url = `${apiBase}/original/${encodeURIComponent(slug)}.svg`;
  let lastError;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    let response;
    try {
      response = await fetch(url, {
        headers: {
          accept: 'image/svg+xml',
          'user-agent': 'tg-gifts-originals/1.0 (https://github.com/CoreEase/tg-gifts)',
        },
        signal: AbortSignal.timeout(45_000),
      });

      if (!response.ok) {
        const error = new Error(`HTTP ${response.status} for ${url}`);
        if (response.status < 500 && response.status !== 429) {
          error.fatal = true;
          throw error;
        }
        lastError = error;
        if (attempt < 4) await delay(retryDelay(response, attempt));
        continue;
      }

      const bytes = Buffer.from(await response.arrayBuffer());
      const temporary = `${destination}.part-${process.pid}`;
      fs.writeFileSync(temporary, bytes);

      if (!isSvgValid(temporary)) {
        fs.rmSync(temporary, { force: true });
        const error = new Error(`Invalid SVG response for ${url}`);
        error.fatal = true;
        throw error;
      }

      fs.renameSync(temporary, destination);
      return 'downloaded';
    } catch (error) {
      if (error.fatal) throw error;
      lastError = error;
      if (attempt < 4) await delay(retryDelay(response, attempt));
    }
  }

  throw lastError || new Error(`Failed to download ${url}`);
}

const slugs = listSlugs().slice(0, limit);
let cursor = 0;
let completed = 0;
let downloaded = 0;
let skipped = 0;
let failed = 0;
const failureSamples = [];

console.log(`Originals: ${slugs.length}; concurrency: ${concurrency}; refresh: ${refresh}; API: ${apiBase}`);

await Promise.all(Array.from({ length: Math.min(concurrency, slugs.length) }, async () => {
  while (true) {
    const index = cursor++;
    if (index >= slugs.length) return;
    const slug = slugs[index];
    try {
      const result = await fetchOriginal(slug);
      if (result === 'downloaded') downloaded += 1;
      else skipped += 1;
    } catch (error) {
      failed += 1;
      if (failureSamples.length < 25) {
        failureSamples.push(`${slug}: ${error.message}`);
      }
    } finally {
      completed += 1;
      if (completed % 25 === 0 || completed === slugs.length) {
        console.log(`Progress ${completed}/${slugs.length}: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
      }
    }
  }
}));

console.log(`Finished: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
if (failureSamples.length) {
  console.error('Sample failures:\n' + failureSamples.map((line) => `- ${line}`).join('\n'));
}
if (failed > 0) process.exitCode = 1;

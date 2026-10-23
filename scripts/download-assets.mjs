#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const apiBase = (process.env.GIFTS_API_BASE || 'https://api.changes.tg').replace(/\/+$/, '');
const concurrency = Math.max(1, Math.min(16, Number.parseInt(process.env.ASSET_DOWNLOAD_CONCURRENCY || '6', 10) || 6));
const refresh = process.argv.includes('--refresh');
const kindArg = process.argv.find((arg) => arg.startsWith('--kind='));
const kindFilter = kindArg?.slice('--kind='.length);
if (kindFilter && !['models', 'patterns'].includes(kindFilter)) throw new Error('--kind must be models or patterns');
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const parsedLimit = limitArg ? Number.parseInt(limitArg.slice('--limit='.length), 10) : Infinity;
const limit = Number.isInteger(parsedLimit) && parsedLimit >= 0 ? parsedLimit : Infinity;

function isWithinRoot(filePath) {
  const resolved = path.resolve(root, filePath);
  return resolved.startsWith(`${root}${path.sep}`);
}
function isValidAsset(filePath, extension) {
  try {
    const fd = fs.openSync(filePath, 'r');
    try {
      const buffer = Buffer.alloc(2048);
      const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
      if (bytesRead === 0) return false;
      if (extension === 'tgs') return bytesRead >= 2 && buffer[0] === 0x1f && buffer[1] === 0x8b;
      if (extension === 'png') return bytesRead >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
      if (extension === 'svg') return buffer.subarray(0, bytesRead).toString('utf8').includes('<svg');
      return false;
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
function buildTasks() {
  const giftsDir = path.join(root, 'gifts');
  const slugs = fs.readdirSync(giftsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const tasks = [];
  for (const slug of slugs) {
    const manifestPath = path.join(giftsDir, slug, 'assets', 'manifest.json');
    if (!fs.existsSync(manifestPath)) throw new Error(`Missing asset manifest: ${manifestPath}`);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (manifest.slug !== slug) throw new Error(`Manifest slug mismatch in ${manifestPath}`);
    if (kindFilter !== 'patterns') {
      for (const model of manifest.models || []) {
        for (const extension of ['svg', 'tgs']) {
          const relativePath = model.assets?.[extension];
          if (!relativePath || !isWithinRoot(relativePath)) throw new Error(`Invalid ${extension} path for ${slug}/${model.name}`);
          tasks.push({ slug, name: model.name, extension, relativePath });
        }
      }
    }
    if (kindFilter !== 'models') {
      for (const pattern of manifest.patterns || []) {
        const relativePath = pattern.assets?.png;
        if (!relativePath || !isWithinRoot(relativePath)) throw new Error(`Invalid PNG path for ${slug}/${pattern.name}`);
        tasks.push({ slug, name: pattern.name, extension: 'png', relativePath });
      }
    }
  }
  return tasks.slice(0, limit);
}
async function fetchOne(task) {
  const destination = path.resolve(root, task.relativePath);
  if (!refresh && isValidAsset(destination, task.extension)) return 'skipped';
  fs.mkdirSync(path.dirname(destination), { recursive: true });

  const route = task.extension === 'png' ? 'pattern' : 'model';
  const url = `${apiBase}/${route}/${encodeURIComponent(task.slug)}/${encodeURIComponent(task.name)}.${task.extension}`;
  let lastError;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    let response;
    try {
      response = await fetch(url, {
        headers: {
          accept: task.extension === 'svg' ? 'image/svg+xml' : task.extension === 'png' ? 'image/png' : 'application/octet-stream',
          'user-agent': 'tg-gifts-assets/1.0 (https://github.com/CoreEase/tg-gifts)',
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
      if (!isValidAsset(temporary, task.extension)) {
        fs.rmSync(temporary, { force: true });
        const error = new Error(`Invalid ${task.extension.toUpperCase()} response for ${url}`);
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

const tasks = buildTasks();
let cursor = 0;
let completed = 0;
let downloaded = 0;
let skipped = 0;
let failed = 0;
const failureSamples = [];
console.log(`Assets: ${tasks.length}; concurrency: ${concurrency}; refresh: ${refresh}; API: ${apiBase}`);
await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, async () => {
  while (true) {
    const index = cursor++;
    if (index >= tasks.length) return;
    const task = tasks[index];
    try {
      const result = await fetchOne(task);
      if (result === 'downloaded') downloaded += 1;
      else skipped += 1;
    } catch (error) {
      failed += 1;
      if (failureSamples.length < 25) failureSamples.push(`${task.slug}/${task.name}.${task.extension}: ${error.message}`);
    } finally {
      completed += 1;
      if (completed % 250 === 0 || completed === tasks.length) {
        console.log(`Progress ${completed}/${tasks.length}: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
      }
    }
  }
}));
console.log(`Finished: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
if (failureSamples.length) {
  console.error('Sample failures:\n' + failureSamples.map((line) => `- ${line}`).join('\n'));
}
if (failed > 0) process.exitCode = 1;

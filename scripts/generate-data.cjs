#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

const root = path.resolve(__dirname, '..');
const inputPath = process.argv[2] && path.resolve(process.argv[2]);
if (!inputPath || !fs.existsSync(inputPath)) {
  console.error('Usage: node scripts/generate-data.cjs /path/to/collections.js');
  process.exit(1);
}

const requireFromInput = createRequire(inputPath);
const source = requireFromInput(inputPath);
const backdrops = source.backdrops;
const collections = source.collections;
if (!Array.isArray(backdrops) || !collections || typeof collections !== 'object') {
  throw new Error('Input must export { backdrops, collections }.');
}

function write(relativePath, content) {
  const target = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content.endsWith('\n') ? content : `${content}\n`);
}
function literal(value) {
  return JSON.stringify(value, null, 2);
}

write('backdrops.ts', `import type { Backdrop } from './types.js';\n\n/** All unique Telegram gift backdrops. */\nexport const backdrops = ${literal(backdrops)} satisfies readonly Backdrop[];\n\nexport default backdrops;`);

const summaries = Object.entries(collections).map(([slug, data]) => ({
  slug,
  modelCount: data.models.length,
  patternCount: data.patterns.length,
  backdropCount: data.backdrops.length,
}));
write('collections.ts', `import type { CollectionSummary } from './types.js';\n\n/** Index of collections; detailed data lives in gifts/<slug>/index.ts. */\nexport const collections = ${literal(summaries)} satisfies readonly CollectionSummary[];\n\nexport default collections;`);

for (const [slug, data] of Object.entries(collections)) {
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error(`Unsafe collection slug: ${slug}`);
  for (const key of ['models', 'patterns', 'backdrops']) {
    if (!Array.isArray(data[key])) throw new Error(`Expected ${key} array in ${slug}`);
  }
  const contents = [
    `import type { GiftModel, GiftPattern, Backdrop, GiftCollection } from '../../types.js';`,
    '',
    `export const models = ${literal(data.models)} satisfies readonly GiftModel[];`,
    '',
    `export const patterns = ${literal(data.patterns)} satisfies readonly GiftPattern[];`,
    '',
    `export const backdrops = ${literal(data.backdrops)} satisfies readonly Backdrop[];`,
    '',
    `export const collection = { slug: ${JSON.stringify(slug)}, models, patterns, backdrops } satisfies GiftCollection;`,
    '',
    'export default collection;',
  ].join('\n');
  write(path.posix.join('gifts', slug, 'index.ts'), contents);
}

console.log(`Generated ${backdrops.length} backdrops and ${summaries.length} collections (${summaries.reduce((n, x) => n + x.modelCount, 0)} models, ${summaries.reduce((n, x) => n + x.patternCount, 0)} patterns, ${summaries.reduce((n, x) => n + x.backdropCount, 0)} collection backdrops).`);

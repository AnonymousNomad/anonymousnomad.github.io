import { cp, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, m => m.slice(1));
const out = join(root, 'dist');

const roots = [
  'about',
  'covert',
  'nexus',
  'privacy',
  'status',
  'tv',
  'workshop',
  '.well-known'
];

const files = [
  'index.html',
  '404.html',
  'llms.txt',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  '_headers'
];

const srcFiles = [
  'src/outpost.js',
  'src/labs.js',
  'src/guide.js',
  'src/hub-shell.js',
  'src/status.js',
  'src/product-page.js',
  'src/section-page.js',
  'src/data/site-registry.js',
  'src/data/section-registry.js',
  'src/styles/labs-foundation.css',
  'src/styles/product-foundation.css',
  'src/styles/hub-page.css'
];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const dir of roots) {
  await cp(join(root, dir), join(out, dir), { recursive: true });
}

for (const file of [...files, ...srcFiles]) {
  const target = join(out, file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(join(root, file), target);
}

console.log('Nomadic Labs public artifact built at dist/');

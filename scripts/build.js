/**
 * Static build script for GitHub Pages deployment.
 * Packages public/index.html into dist/index.html while keeping server.js unchanged.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCE_HTML = path.join(ROOT_DIR, 'public', 'index.html');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const TARGET_HTML = path.join(DIST_DIR, 'index.html');

fs.rmSync(DIST_DIR, { recursive: true, force: true });
fs.mkdirSync(DIST_DIR, { recursive: true });
fs.copyFileSync(SOURCE_HTML, TARGET_HTML);

console.log('Built static GitHub Pages bundle at dist/index.html');

const fs = require('node:fs');
const path = require('node:path');

// Give shared resume links a real GitHub Pages entry instead of the SPA's 404 fallback.
const output = path.resolve(__dirname, '..', 'dist', 'personal-site', 'browser');
const html = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
fs.mkdirSync(path.join(output, 'resume'), { recursive: true });
fs.writeFileSync(
  path.join(output, 'resume', 'index.html'),
  html.replace(/<title>[^<]*<\/title>/, '<title>Austin Chitmon — Resume</title>'),
);

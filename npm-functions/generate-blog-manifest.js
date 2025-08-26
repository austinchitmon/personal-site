// generate-manifest.js
const fs = require('fs');
const path = require('path');
const BLOG_DIR = 'blog';
const root = path.resolve(__dirname, '..');

const blogPath = path.join(root, 'public', BLOG_DIR);
const manifestPath = path.join(blogPath, 'manifest.json');


fs.readdir(blogPath, (err, files) => {
  if (err) {
    return console.error('Error reading blog directory:', err);
  }
  const markdownFiles = files
    .filter(file => file.endsWith('.md'))
    .map(file => `${file}`);

  if (markdownFiles?.length === 0) {
    return console.error('No markdown files found in the blog directory.');
  }

  const manifest = { files: markdownFiles };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('Manifest file generated successfully!');
});

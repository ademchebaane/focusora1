const fs = require('fs');
const path = require('path');
const out = path.join(process.cwd(), 'www');
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'app.css', 'app.js']) {
  fs.copyFileSync(file, path.join(out, file));
}
console.log('Focusora web files copied to www/');

// Serve the built site (dist/) like production Apache does for the blog: a path, then path/index.html.
// usage: node serve.mjs <dir> <port>
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const [dir, port] = [path.resolve(process.argv[2]), Number(process.argv[3] || 4410)];
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8' };
http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  for (const t of [url, path.join(url, 'index.html')]) {
    const f = path.join(dir, t);
    if (!f.startsWith(dir)) break;
    if (fs.existsSync(f) && fs.statSync(f).isFile()) {
      if (t !== url && !url.endsWith('/')) { res.writeHead(301, { Location: url + '/' }); return res.end(); }
      res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
      return fs.createReadStream(f).pipe(res);
    }
  }
  res.writeHead(404); res.end('not found');
}).listen(port, '127.0.0.1', () => console.log(`serving ${dir} on ${port}`));

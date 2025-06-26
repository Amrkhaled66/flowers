const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');
const url = require('url');

const PORT = process.env.PORT || 3000;
const distDir = path.join(__dirname, 'dist');
const VITE_DEV_SERVER = 'http://localhost:5173';

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.json': 'application/json',
    '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
    // Add CORS headers to all responses
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Proxy API requests to remote server
    if (req.url.startsWith('/api/')) {
        const remoteUrl = `https://ballora.am-naguib.com${req.url}`;
        const parsedUrl = url.parse(remoteUrl);

        const proxyReq = https.request({
            hostname: parsedUrl.hostname,
            path: parsedUrl.path,
            method: req.method,
            headers: {
                ...req.headers,
                host: parsedUrl.hostname,
                origin: 'https://ballora.am-naguib.com'
            }
        }, proxyRes => {
            res.writeHead(proxyRes.statusCode, {
                ...proxyRes.headers,
                'access-control-allow-origin': '*'
            });
            proxyRes.pipe(res, { end: true });
        });

        proxyReq.on('error', (e) => {
            res.writeHead(502);
            res.end('Proxy error');
        });

        req.pipe(proxyReq, { end: true });
        return;
    }

    // In development, proxy all other requests to Vite dev server
    if (process.env.NODE_ENV !== 'production') {
        const proxyReq = http.request(
            VITE_DEV_SERVER + req.url,
            {
                method: req.method,
                headers: req.headers,
            },
            proxyRes => {
                res.writeHead(proxyRes.statusCode, proxyRes.headers);
                proxyRes.pipe(res, { end: true });
            }
        );
        proxyReq.on('error', (e) => {
            res.writeHead(502);
            res.end('Vite proxy error');
        });
        req.pipe(proxyReq, { end: true });
        return;
    }

    let filePath = path.join(distDir, req.url.split('?')[0]);
    if (req.url === '/' || req.url === '') {
        filePath = path.join(distDir, 'index.html');
    }

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            const ext = path.extname(filePath);
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
            fs.createReadStream(filePath).pipe(res);
        } else {
            // Fallback to index.html for client-side routing
            fs.readFile(path.join(distDir, 'index.html'), (err, content) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                }
            });
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
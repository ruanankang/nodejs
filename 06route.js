const http = require('http');
const fs = require('fs');

// 创建服务器
http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    if (req.url === '/' || req.url === '/index') {
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      fs.createReadStream(`${__dirname}/06index.html`).pipe(res);
    } else if (req.url === '/contact') {
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      fs.createReadStream(`${__dirname}/06contact.html`).pipe(res);
    } else if (req.url === '/api') {
      res.writeHead(200, {
        'Content-type': 'application/json'
      })
      fs.createReadStream(`${__dirname}/06api.json`).pipe(res);
    }
  }
}).listen(8888);
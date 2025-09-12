const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const PUBLIC_DIR = path.join(__dirname);

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 获取请求的URL路径
  let filePath = path.join(PUBLIC_DIR, req.url);
  
  // 检查文件是否存在
  fs.stat(filePath, (err, stats) => {
    // 如果文件不存在或请求的是目录，返回index.html
    if (err || stats.isDirectory()) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
    
    // 读取文件并发送响应
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }
      
      // 设置正确的MIME类型
      const ext = path.extname(filePath).toLowerCase();
      const mimeType = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.woff': 'application/font-woff',
        '.woff2': 'application/font-woff2',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf'
      }[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  });
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`也可以通过 http://127.0.0.1:${PORT} 访问`);
  console.log('按 Ctrl+C 停止服务器');
});
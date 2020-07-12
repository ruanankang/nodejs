// 通过http模块，创建本地服务器 ip 127.0.0.1  port 8888
const http = require('http')

// 创建服务器方法
const server = http.createServer(function(request, response) {
  console.log('客户端向服务器发送请求：', request.url);
  response.writeHead(200, {
    "Content-type": 'text/plain'
  })
  response.end('Server is working!')
})

// 服务对象监听服务器地址以及端口号
server.listen(8888, "127.0.0.1");

console.log("服务器正在运行")
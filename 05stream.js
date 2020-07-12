const fs = require('fs');
const http = require('http')

// 读取文件流
let myReadStream = fs.createReadStream(`${__dirname}/05readMe.txt`, 'utf8');
// 写入文件流
let myWriteStream = fs.createWriteStream(`${__dirname}/05writeMe.txt`)

// myReadStream.on('data', function(chunk) {
//   console.log('======正在接收一部分数据======');
//   // console.log(chunk);
//   myWriteStream.write(chunk);
// })

// 利用管道事件一次性进行文件流的读写 pipe() 输入流.pipe(输出流)
// myReadStream.pipe(myWriteStream);

// 在浏览器中显示文档
const server = http.createServer((req, res) => {
  console.log('浏览器向服务端发送请求：', req.url);
  res.writeHead(200, {
    'Content-type': 'text/plain'
  })
  myReadStream.pipe(res);
});

server.listen(8888, '127.0.0.1');
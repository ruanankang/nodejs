// 引入express模块
const express = require('express');

// 实例化express对象
let app = express();

// 根据用户请求的地址，返回对应的数据信息
app.get('/', (req, res) => {
  console.log(req.url);
  res.send('This is Home Page!');
});
app.get('/contact', (req, res) => {
  console.log(req.url);
  res.send('This is Contact Page!');
});

// 路由参数设定
app.get('/profile/:id', (req, res) => {
  console.log(req.url);
  res.send(`当前访问的profile的id为${req.params.id}`);
});

// 监听服务器端口号
app.listen(8888, '127.0.0.1')
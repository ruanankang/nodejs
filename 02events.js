// 1、引入系统事件模块，不用写路径，引入自定义模块需要写文件路径
var events = require('events');

// 2、创建 EventEmitter 对象
var myEmitter = new events.EventEmitter();

// 3、注册事件
myEmitter.on('someEvent', function(message) {
  console.log(message);
})

// 4、触发事件，可以传参数
myEmitter.emit('someEvent', '传递的参数');

console.log(1111)
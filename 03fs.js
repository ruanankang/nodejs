// 文件系统

// 1. 引入文件系统模块
const fs = require('fs');

// 2. 通过对象调用方法
/**
 * 读取：同步方法readFileSync，异步方法readFile
 * 写入：同步方法writeFileSync，异步方法writeFile
 * 创建文件夹：同步方法mkdirSync，异步方法mkdir
 * 删除文件夹：同步方法rmdirSync，异步方法rmdir
 * 删除文件：unlink
 */
const response = fs.readFileSync('./03readMe.txt', 'utf8');
console.log(response);
// fs.writeFileSync('./03writeMe.txt', response); // 第二个参数可以是字符串等数据，也可以是文件流

fs.readFile('./03readMe.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
  // fs.writeFile('./03writeMe.txt', response);



// fs.unlink('./03readMe.txt', err => {
//   if (err) throw err;
//   console.log('文件删除成功')
// })
/*
 * @Descripttion: node全局变量  console  __dirname  __filename 定时器等等
 * @version:
 * @Author: Ankong
 * @Date: 2019-09-14 15:24:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-27 10:00:32
 */

// 引入并声明
// const counter = require('./stuff');
// console.log(counter(['Herrt', 'Bob', 'Alice']));

const stuff = require('./01module_require');
console.log(stuff.foo(['Herrt', 'Bob', 'Alice']));

// console.log("Hello World");
// console.log(__dirname); //文件路径名称
// console.log(__filename); //文件完整名称
// console.log(global); //全局变量

// let time = 0;
// let timer = setInterval(() => {
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 4) {
//         clearInterval(timer)
//     }
// });

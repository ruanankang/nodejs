var counter = function(arr) {
  return "一共有" + arr.length + "个元素在数组中";
}
var foo = function(arr) {
  return arr;
}

var pi = 3.14

// 导出counter
// module.exports = counter;
// 或者
// exports.counter = counter;

module.exports = {
  foo: foo,
  pi: pi
}
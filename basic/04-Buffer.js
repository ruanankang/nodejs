// 通过字符串、数组等创建buffer
const buffer1 = Buffer.from('asdd');
const buffer2 = Buffer.from([1, 2, 3]);

// 指定长度创建buffer
const buffer3 = Buffer.alloc(20);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

// buffer的读

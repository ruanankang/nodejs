const { Schema, model } = require('mongoose');

// 创建用户模块的schema
const userSchema = new Schema({
	__v: { type: String, select: false },
	name: { type: String, required: true },
	age: { type: Number, required: false, default: 18 },
	password: { type: String, required: true, select: false }
});

// 通过schema生成用户的模型model
module.exports = model('User', userSchema);

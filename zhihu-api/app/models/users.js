const { Schema, model } = require('mongoose');

// 创建用户模块的schema
const userSchema = new Schema({
	__v: { type: String, select: false },
	name: { type: String, required: true },
	age: { type: Number, required: false, default: 18 },
	password: { type: String, required: true, select: false },
	avatar_url: {
		type: String
	},
	gender: {
		type: String,
		enum: ['male', 'female'],
		default: 'male',
		required: true
	},
	headline: {
		type: String
	},
	locations: { type: [{ type: String }], select: false }, // 数组类型，且每一项是字符串类型
	business: { type: String, select: false },
	employments: {
		type: [
			{
				company: { type: String },
				job: { type: String }
			}
		],
		select: false
	},
	educations: {
		type: [
			{
				school: { type: String },
				major: { type: String },
				diploma: { type: Number, enum: [1, 2, 3, 4, 5] },
				entrance_year: { type: Number },
				graduation_year: { type: Number }
			}
		],
		select: false
	},
	following: {
		type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		select: false
	}
});

// 通过schema生成用户的模型model
module.exports = model('User', userSchema);

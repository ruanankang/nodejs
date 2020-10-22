const jsonwebtoken = require('jsonwebtoken');
// 利用koa-jwt进行认证
const jwt = require('koa-jwt');
const User = require('../models/users');
const { secret } = require('../config');

class UsersController {
	async find(ctx) {
		ctx.body = await User.find();
	}

	async findById(ctx) {
		const user = await User.findById(ctx.params.id);
		if (!user) {
			ctx.throw(404, '用户不存在');
		}
		ctx.body = user;
	}

	async create(ctx) {
		// 验证请求体数据格式 schema
		ctx.verifyParams({
			name: { type: 'string', required: true },
			age: { type: 'number', required: false },
			password: { type: 'string', required: true }
		});
		// 用户唯一性校验
		const { name = '' } = ctx.request.body;
		const existUser = await User.findOne({ name });
		if (existUser) {
			ctx.throw(409, '用户已经存在');
		}
		// 保存数据
		const user = await new User(ctx.request.body).save();
		ctx.body = user;
	}

	async update(ctx) {
		ctx.verifyParams({
			name: { type: 'string', required: false },
			age: { type: 'number', required: false },
			password: { type: 'string', required: false }
		});
		const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
		if (!user) {
			ctx.throw(404, '用户不存在');
		}
		ctx.body = user;
	}

	async delete(ctx) {
		const user = await User.findByIdAndDelete(ctx.params.id);
		if (!user) {
			ctx.throw(404, '用户不存在');
		}
		ctx.status = 204;
	}

	async login(ctx) {
		ctx.verifyParams({
			name: { type: 'string', required: true },
			password: { type: 'string', required: true }
		});
		const user = await User.findOne(ctx.request.body);
		if (!user) {
			ctx.throw(401, '用户或密码不正确');
		}
		const { id = '', name = '' } = user;
		const token = jsonwebtoken.sign({ id, name }, secret, {
			expiresIn: '1d' // 过期时间
		});
		ctx.body = { token };
	}

	// 手动认证
	// async auth(ctx, next) {
	// 	const { authorization = '' } = ctx.request.header;
	// 	const token = authorization.replace('Bearer ', '');
	// 	try {
	// 		const user = jsonwebtoken.verify(token, secret);
	// 		// 将变量赋值到全局ctx.state上，方面其他中间件使用
	// 		ctx.state.user = user;
	// 		await next();
	// 	} catch (err) {
	// 		// 未认证
	// 		ctx.throw(401, err.message);
	// 	}
	// }

	// 利用koa-jwt进行认证
	auth = jwt({ secret });

	// 授权
	async checkOwner(ctx, next) {
		if (ctx.params.id !== ctx.state.user.id) {
			ctx.throw(403, '没有权限');
		}
		await next();
	}
}

module.exports = new UsersController();

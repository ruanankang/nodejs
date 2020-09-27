'use strict';

module.exports = (options, app) => {
	console.log(options);
	// 返回一个异步的方法
	return async (ctx, next) => {
		console.log(new Date());
		await next();
	};
};

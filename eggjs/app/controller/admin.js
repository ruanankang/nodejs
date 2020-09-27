'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
	async index() {
		this.ctx.body = 'hello admin';
	}

	async news() {
		// console.log(this);
		// 调用服务里的方法，注意异步问题
		const list = await this.service.news.getNewsList();

		await this.ctx.render('./news.html', {
			list
		});

		// this.ctx.body = 'hello news';
	}
}

module.exports = AdminController;

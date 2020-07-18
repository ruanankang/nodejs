'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
	async index() {
		this.ctx.body = 'hello admin';
	}

	async news() {
		console.log(this);
		// this.service.NewsService.getNewsList();

		this.ctx.body = 'hello news';
	}
}

module.exports = AdminController;

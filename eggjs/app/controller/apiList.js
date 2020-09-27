'use strict';

const Controller = require('egg').Controller;

class ApiListController extends Controller {
	async list() {
		const list = (await this.service.news.getApiNewsList()).result;
		await this.ctx.render('./api.html', {
			list
		});
	}

	async newsContent() {
		const aid = this.ctx.query.aid;
		const detail = (await this.service.news.getNewsContent(aid)).result[0];
		await this.ctx.render('./newscontent.html', { detail });
	}
}

module.exports = ApiListController;

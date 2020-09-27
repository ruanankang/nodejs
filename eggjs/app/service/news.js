// 处理数据请求，数据源

'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
	async getNewsList() {
		// 获取新闻数据
		const newsList = ['a', 'b', 'c'];

		// 返回
		return newsList;
	}

	async getApiNewsList() {
		// 获取远程接口数据 curl
		const url = `${this.config.api}appapi.php?a=getPortalList&catid=20&page=1`;
		const response = await this.ctx.curl(url);

		// 返回
		return JSON.parse(response.data);
	}

	async getNewsContent(aid) {
		// 获取远程接口数据 curl
		const url = `${this.config.api}appapi.php?a=getPortalArticle&aid=${aid}`;
		const response = await this.ctx.curl(url);
		// 返回
		return JSON.parse(response.data);
	}
}

module.exports = NewsService;

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
}

module.exports = NewsService;

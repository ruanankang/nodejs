'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/news', controller.home.news);
	router.get('/admin', controller.admin.index);
	router.get('/admin/news', controller.admin.news);
	router.get('/api-list', controller.apiList.list);
	router.get('/newscontent', controller.apiList.newsContent);
};

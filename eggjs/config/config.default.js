/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1594562847990_8013';

	// add your middleware config here
	config.middleware = ['printdate'];
	// 给中间件传入参数
	config.printdate = {
		a: 'aaaa'
	};

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	// 配置模板引擎
	config.view = {
		mapping: {
			'.html': 'ejs'
		}
	};

	// 配置公共api
	config.api = 'http://www.phonegap100.com/';

	return {
		...config,
		...userConfig
	};
};

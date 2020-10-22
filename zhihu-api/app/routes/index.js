const fs = require('fs');

module.exports = (app) => {
	fs.readdirSync(__dirname).map((fileName) => {
		if (fileName === 'index.js') return;
		const router = require(`./${fileName}`);
		app.use(router.routes()).use(router.allowedMethods());
	});
};

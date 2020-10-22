const { v1: uuidv1 } = require('uuid');

class HomeController {
	async index(ctx) {
		ctx.body = '这是首页';
	}
	// 文件上传
	async upload(ctx) {
		// files是上传文件的集合对象，属性名为每一个文件的name
		const { files = [] } = ctx.request;
		const filesNameList = Object.keys(files);
		if (!filesNameList.length) {
			ctx.throw(400, '上传文件类型有误');
		} else if (filesNameList.length === 1) {
			const { path = `image_${uuidv1()}` } = files[filesNameList[0]];
			// 上传一个文件
			ctx.body = { path };
		} else {
			// 上传多个文件
			const pathsArr = [];
			filesNameList.map((fileName) => {
				const { path = `image_${uuidv1()}` } = filesNameList[fileName];
				pathsArr.push({ path });
			});
			ctx.body = [...pathsArr];
		}
	}
}

module.exports = new HomeController();

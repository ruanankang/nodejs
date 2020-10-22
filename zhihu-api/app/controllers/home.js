const path = require('path');
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
			// 上传一个文件
			const { path: filePath = `image_${uuidv1()}` } = files[filesNameList[0]];
			const basename = path.basename(filePath);
			ctx.body = { filePath, url: `${ctx.origin}/uploads/${basename}` };
		} else {
			// 上传多个文件
			const pathsArr = [];
			filesNameList.map((fileName) => {
				const { path: filePath = `image_${uuidv1()}` } = files[fileName];
				const basename = path.basename(filePath);
				pathsArr.push({ filePath, url: `${ctx.origin}/uploads/${basename}` });
			});
			ctx.body = [...pathsArr];
		}
	}
}

module.exports = new HomeController();

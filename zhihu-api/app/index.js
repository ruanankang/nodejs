const path = require('path');
const Koa = require('koa');
// 静态资源文件请求服务
const koaStatic = require('koa-static');
// 解析请求体，只支持form和json两种文件格式
// const bodyParser = require('koa-bodyparser');
// 解析请求体，支持formdata、form和json格式
const koaBody = require('koa-body');
// 请求体参数校验
const parameter = require('koa-parameter');
// 将错误信息json化
const jsonError = require('koa-json-error');
const routing = require('./routes');
const mongoose = require('mongoose');
const { mongodbConnectionString } = require('./config');

const app = new Koa();
// 通过mongoose工具连接MongoDB数据库
mongoose.connect(
	mongodbConnectionString,
	{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
	() => {
		console.log('MongoDB 连接成功！');
	}
);
mongoose.connection.on('error', console.error);

// 建立静态资源请求的服务
app.use(koaStatic(path.join(__dirname, 'public')));

// 生成环境下报错信息不展示stack
app.use(
	jsonError({
		postFormat: (e, { stack, ...rest }) =>
			process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
	})
);
app.use(
	koaBody({
		multipart: true,
		formidable: {
			maxFields: 3, // 文件数目上限
			maxFieldsSize: 4 * 1024 * 1024, // 总文件大小 4mb
			uploadDir: path.join(__dirname, '/public/uploads'), // 上传保存到服务器的目录
			keepExtensions: true // 保留文件扩展名
		}
	})
);
app.use(parameter(app));
routing(app);

app.listen(3000, () => console.log('程序启动在 3000 端口'));

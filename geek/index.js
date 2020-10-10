const koa = require('koa');
const fs = require('fs');
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');

const app = new koa();

app.use(koaStatic(`${__dirname}/source/`));

app.use(
	koaMount('/', async (ctx) => {
		ctx.body = fs.readFileSync(`${__dirname}/source/index.htm`, 'utf-8');
	})
);

app.listen(3000);

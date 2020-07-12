import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
	if (ctx.req.url === '/') {
		ctx.body = 'hello world';
	} else if (ctx.req.url === '/test') {
		ctx.body = 'text';
	}
});

app.listen(3000);

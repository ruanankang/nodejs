const Koa = require('koa');
const Router = require('koa-router');
// 解析请求体的中间件，koa默认不解析请求体
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });

router.get('/', async (ctx) => {
	ctx.body = 'hello';
});

router.post('/', async (ctx) => {
	ctx.body = 'hello';
});

router.get('/:id', async (ctx) => {
	ctx.body = ctx.params.id;
});

usersRouter.get('/:id', async (ctx) => {
	ctx.body = `users-${ctx.params.id}`;
});

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(usersRouter.routes()).use(router.allowedMethods());

app.listen(3000);

// app
// 	.use(async (ctx) => {
// 		if (ctx.url === '/') {
// 			ctx.body = 'hello world';
// 		}
// 	})
// 	.listen(3000);

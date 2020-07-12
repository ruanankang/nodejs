import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
	ctx.body = 'hello';
});
router.get('/list', async (ctx) => {
	ctx.body = [1, 2, 3];
});
router.get('/list/:name', async (ctx) => {
	console.log(ctx.query);
	ctx.body = {
		name: ctx.params.name
	};
});

router.post('/list2', async (ctx) => [
	(ctx.body = {
		code: 0
	})
]);

// 分组路由
const groupRouter = new Router({
	prefix: '/group'
});
groupRouter.get('/', async (ctx) => {
	ctx.body = 'group';
});
groupRouter.get('/list', async (ctx) => {
	ctx.body = 'groupList';
});

// 嵌套路由
const nest = new Router();
nest.use('/nest', groupRouter.routes());

// 多层中间件
const db = new Router();
db.get(
	'/db/:id',
	async (ctx, next) => {
		ctx.user = 'Alice';
		next();
	},
	async (ctx, next) => {
		ctx.time = Date.now();
		next();
	},
	async (ctx) => {
		ctx.body = {
			user: ctx.user,
			time: ctx.time
		};
	}
);

// 挂载路由
app.use(router.routes()).use(router.allowedMethods());
app.use(groupRouter.routes()).use(groupRouter.allowedMethods());
app.use(nest.routes()).use(nest.allowedMethods());
app.use(db.routes()).use(db.allowedMethods());

// 监听端口
app.listen(3000);

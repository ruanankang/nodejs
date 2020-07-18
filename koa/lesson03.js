import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';

const app = new Koa();
const router = new Router();
// app.use(
// 	views('./views', {
// 		map: {
// 			ejs: 'ejs'
// 		}
// 	})
// );
app.use(
	views('./views', {
		extension: 'ejs'
	})
);

router.get('/', async (ctx) => {
	await ctx.render('./index.ejs', {
		user: {
			name: 'Alice'
		}
	});
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

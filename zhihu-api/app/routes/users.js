const Router = require('koa-router');
const {
	find,
	findById,
	create,
	update,
	delete: del,
	login,
	auth,
	checkOwner
} = require('../controllers/users');

const router = new Router({ prefix: '/users' });

// 查询用户列表
router.get('/', find);

// 指定id查询用户
router.get('/:id', findById);

// 注册用户
router.post('/', create);

// 修改用户信息
router.patch('/:id', auth, checkOwner, update);

// 注销用户
router.delete('/:id', auth, checkOwner, del);

// 用户登陆
router.post('/login', login);

module.exports = router;

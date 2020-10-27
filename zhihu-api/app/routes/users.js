const Router = require('koa-router');
const {
	find,
	findById,
	create,
	update,
	delete: del,
	login,
	auth,
	checkOwner,
	getFollowingList,
	follow,
	unfollow,
	getFollowerList,
	checkUserExist
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

// 获取用户关注者
router.get('/:id/following', getFollowingList);

// 关注某人
router.put('/follow/:id', auth, checkUserExist, follow);

// 取消关注某人
router.delete('/unfollow/:id', auth, checkUserExist, unfollow);

// 获取用户粉丝列表
router.get('/:id/follower', getFollowerList);

module.exports = router;

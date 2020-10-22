const Router = require('koa-router');
const { index, upload } = require('../controllers/home');

const router = new Router();

router.get('/', index);

// 文件上传
router.post('/upload', upload);

module.exports = router;

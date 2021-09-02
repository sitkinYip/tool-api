const Router = require('koa-router');
// 文件处理方法
const { footImageHandler } = require('../middleware/file-middleware');
// 底图处理函数
const { createFootImage, getFootList } = require('../controller/footimage-controller');
// 校验是否已登录
const { verifyAuth } = require('../middleware/auth-middleware');
const uploadRouter = new Router({ prefix: '/upload' });
// 上传底部图片接口
uploadRouter.post('/footcreate', verifyAuth, footImageHandler, createFootImage);
// 查询接口
uploadRouter.get('/footImglist', getFootList);
module.exports = uploadRouter;

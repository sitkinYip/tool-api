const Router = require('koa-router');
// 文件处理方法
const { footImageHandler } = require('../middleware/file-middleware');
// 底图处理函数
const {
  createFootImage,
  getFootList,
  getFootImgDetails,
  updateFootImage,
  delFootImage,
} = require('../controller/footimage-controller');
// 校验是否已登录
const { verifyAuth } = require('../middleware/auth-middleware');
// 处理添加更新及删除时的参数校验
const uploadRouter = new Router({ prefix: '/upload' });
// 上传底部图片接口
uploadRouter.post('/footcreate', verifyAuth, footImageHandler, createFootImage);
// 查询接口
uploadRouter.get('/footimglist', getFootList);
// 底图详情
uploadRouter.get('/footimgdetails', verifyAuth, getFootImgDetails);
// 更新底图列表
uploadRouter.put('/updatefootimage', verifyAuth, footImageHandler, updateFootImage);
// 删除底图
uploadRouter.delete('/delfootimg', verifyAuth, delFootImage);
module.exports = uploadRouter;

const Router = require('koa-router');
// 校验是否已登录
const { verifyAuth } = require('../middleware/auth-middleware');
// 处理对应请求的中间件
const {
  createPlatform,
  getPlatformList,
  getPlatformDetails,
  deletePlatform,
  updatePlatform,
} = require('../controller/platform-controller');
// 初始化平台路由列表
const platformRouter = new Router({ prefix: '/platform' });
// 新增平台
platformRouter.post('/create', verifyAuth, createPlatform);
// 拿平台列表
platformRouter.get('/list', verifyAuth, getPlatformList);
// 拿平台详情
platformRouter.get('/details', verifyAuth, getPlatformDetails);
// 更新平台数据
platformRouter.put('/update', verifyAuth, updatePlatform);
// 删除平台数据
platformRouter.delete('/del', verifyAuth, deletePlatform);
module.exports = platformRouter;

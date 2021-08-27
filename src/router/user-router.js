const Router = require('koa-router');
const { create } = require('../controller/user-controller');
const { verifyUse } = require('../middleware/user-middleware')
const userRouter = new Router({ prefix: '/users' });
// 注册方法 先执行verifyUse校验参数合法性再执行create进行创建
userRouter.post('/', verifyUse, create);

module.exports = userRouter;
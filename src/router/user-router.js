const Router = require('koa-router');
const { create } = require('../controller/user-controller');
const { verifyUse,handlePassword } = require('../middleware/user-middleware')
const userRouter = new Router({ prefix: '/users' });
// 注册方法 先执行verifyUse校验参数合法性再执行handlePassword对密码进行加密再用create进行创建
userRouter.post('/', verifyUse, handlePassword, create);

module.exports = userRouter;
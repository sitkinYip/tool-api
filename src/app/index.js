const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const userRouter = new Router({prefix: '/users'});
userRouter.post('/', (ctx, next) => {
  ctx.body = '创建用户成功'
});
app.use(userRouter.routes()); // 注册路由
app.use(userRouter.allowedMethods()); // 处理不存在的请求方式与路径给用户报错
module.exports = app;
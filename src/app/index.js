const Koa = require('koa');
// 引入参数解析插件
const bodyParser = require('koa-bodyparser');
//注册接口
// const userRouter = require('../router/user-router');
// 授权登录接口
// const authRouter = require('../router/auth-router')
// 全部路由导入
const useRouter = require('../router/index')
// 错误处理函数
const errorHandle = require('./error-handle')
const app = new Koa()
// 注册一下参数解析插件即可应用到全局
app.use(bodyParser())
// 因为路由注册方法都一样 所以封装到router下的index.js里面用fs处理 
app.useRouter = useRouter
app.useRouter(app)
/* app.use(userRouter.routes()); // 注册路由
app.use(userRouter.allowedMethods()); // 处理不存在的请求方式与路径给用户报错
app.use(authRouter.routes()); // 注册路由
app.use(authRouter.allowedMethods()); // 处理不存在的请求方式与路径给用户报错 
  */
 app.on('error', errorHandle) // 错误处理函数
module.exports = app;
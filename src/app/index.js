const path = require('path')
const Koa = require('koa');
const cors = require('koa2-cors');
// 引入参数解析插件
const bodyParser = require('koa-bodyparser');
// 静态资源解析
const static = require('koa-static')
//注册接口
// const userRouter = require('../router/user-router');
// 授权登录接口
// const authRouter = require('../router/auth-router')
// 全部路由导入
const useRouter = require('../router/index')
// 错误处理函数
const errorHandle = require('./error-handle')
const app = new Koa()
// 处理跨域
app.use(
  cors({
      origin: function(ctx) { //设置允许来自指定域名请求
         /*  if (ctx.url === '/test') {
              return '*'; // 允许来自所有域名请求
          }
          return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求 */
          return '*';
      },
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: true, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);
//配置静态资源中间件
app.use(static(path.join('./file')))
// 注册一下参数解析插件即可应用到全局
app.use(bodyParser({
  multipart: true // 是否支持 multipart-formdate 的表单
}))
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
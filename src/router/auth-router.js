const Router = require('koa-router')
const {verifyLogin, verifyAuth} = require('../middleware/auth-middleware')
/* 
verifyLogin:校验登录接口数据
verifyAuth：校验token
*/
const authRouter = new Router({prefix: '/auth'})

const { login } = require('../controller/auth-controller')
// 登录
authRouter.post('/login', verifyLogin, login)

module.exports = authRouter;
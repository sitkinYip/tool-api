const Router = require('koa-router')
const {verifyLogin} = require('../middleware/auth-middleware')
const authRouter = new Router({prefix: '/auth'})

const { login } = require('../controller/auth-controller')

authRouter.post('/login', verifyLogin, login)

module.exports = authRouter;
const service = require('../service/user-service')
// 授权登录请求处理
class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.body = `${name},欢迎回来！`
  }
}

module.exports = new AuthController();
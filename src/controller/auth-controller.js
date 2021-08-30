const jwt = require('jsonwebtoken');
const service = require('../service/user-service');
const { PRIVATE_KEY,PUBLIC_KEY } = require('../app/config')

// 授权登录请求处理
class AuthController {
  async login(ctx, next) {
    console.log(ctx.user);
    // const { id, name } = ctx.request.body;
    const { id, name } = ctx.user;
    const token = jwt.sign({id, name},PRIVATE_KEY,{
      expiresIn: 60*60*24*7,
      algorithm:'RS256'
    })
    ctx.body = {
      id,
      name,
      token,
      status: true
    };
  }
}

module.exports = new AuthController();

const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');

// 授权登录请求处理
class AuthController {
  async login(ctx, next) {
    // const { id, name } = ctx.request.body;
    /* 生成一个token给前端 */
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
      algorithm: 'RS256',
    });
    ctx.body = {
      code: 200,
      msg: '成功',
      data: {
        id,
        name,
        token,
        code: 200,
        expire: Date.now()+60 * 60 * 24 * 7*1000,
      },
      status: true,
    };
  }
}

module.exports = new AuthController();

const errorTypes = require('../constants/error-types');
const service = require('../service/user-service')
const md5password = require('../utils/password-handle')
const verifyLogin = async (ctx, next) => {
  // 获取用户名密码
  const { name, password } = ctx.request.body;
  // 判断账号密码不能为空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_NOT_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }
  // 判断用户是否存在
  const result = await service.getUserName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }
  // 判断密码是否和数据库的一致
  if(md5password(password) !== user.password) {
    console.log(md5password(password))
    console.log(user.password)
    const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx);
  }
  await next();
};
module.exports = {
  verifyLogin
}

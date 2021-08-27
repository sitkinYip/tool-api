const errorTypes = require('../constants/error-types')
const service = require('../service/user-service')
const verifyUse = async (ctx, next) => {
  const {name, password} = ctx.request.body;
  // 判断用户名密码不能为空
  if(!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_NOT_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  } 
  // 判断用户名有没有被注册过
  const result = await service.getUserName(name)
  if(result.length) {
    console.log(result)
    const error = new Error(errorTypes.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  } 
  await next()
}

module.exports = {
  verifyUse
}
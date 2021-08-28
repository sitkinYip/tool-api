const errorTypes = require('../constants/error-types')
const service = require('../service/user-service')
// 加密函数引入
const md5password = require('../utils/password-handle')
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
    // console.log(result)
    const error = new Error(errorTypes.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  } 
  await next()
}
// 密码加密
const handlePassword = async (ctx, next) => {
  let { password } = ctx.request.body;
  // password = password+'yip'
  password = md5password(password)
  ctx.request.body.password = password
  await next()
}

module.exports = {
  verifyUse,
  handlePassword
}
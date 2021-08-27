const errorTypes = require('../constants/error-types') // 引入错误常量信息
// 处理错误信息函数用于返回不同错误信息
const errorHandle = (err, ctx) => {
  let status,message;
  switch (err.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_NOT_REQUIRED:
    status = 400;
    message = "用户名或者密码不能为空";
    break;
    case errorTypes.USER_ALREADY_EXISTS:
    status = 409;
    message = '已存在相同用户名！'
    break;
    default:
      status = 404;
      message = '未知错误';
  }
  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandle;
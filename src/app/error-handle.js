const errorTypes = require('../constants/error-types'); // 引入错误常量信息
// 处理错误信息函数用于返回不同错误信息
const errorHandle = (err, ctx) => {
  let status, message;
  switch (err.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_NOT_REQUIRED:
      status = 400;
      message = '用户名或者密码不能为空';
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409;
      message = '已存在相同用户名！';
      break;
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400;
      message = '用户不存在！请注册！';
      break;
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400;
      message = '账号或者密码错误！';
      break;
    case errorTypes.UNAUTHORIZATION:
      status = 403;
      message = '未授权或者token过期，请重新登录！';
      break;
    case errorTypes.RECORD_NOT_NULL:
      status = 400;
      message = "备案不能为空!"
      break;
    case errorTypes.ID_NOT_NULL:
      status = 400;
      message = "id不能为空"
      break;
    case errorTypes.NAME_NOT_NULL:
      status = 400;
      message = "名称不能为空"
      break;
    case errorTypes.ERROR_ALL:
      status = 400;
      message = "发生错误，请检查参数是否合法或者token是否过期！如您确保以上一切无误，请联系接口管理员！"
      break;
    case errorTypes.ERROR_UNAUTHORIZED:
      status = 403;
      message = "抱歉，您不具备相关权限！"
      break;
    case errorTypes.ID_ERROR:
      status = 400;
      message = "id不存在！"
      break;
    default:
      status = 404;
      message = '未知错误';
  }
  ctx.status = status;
  ctx.body = {
    status: false,
    code: -1,
    msg: message
  };
};

module.exports = errorHandle;

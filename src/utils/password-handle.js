const crypto = require('crypto')
// 加密密码的函数
const md5password = (password) => {
  // 加密方式为md5
  const md5 = crypto.createHash('md5');
  // 加密后转为16进制的字符串
  const result = md5.update(password).digest('hex');
  return result
}

module.exports = md5password;
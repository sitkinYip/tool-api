// 利用dotenv拿目录下的env配置文件信息
const dotenv = require('dotenv');
const path = require('path')
const fs = require('fs')
dotenv.config();
// 拿到秘钥
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'))
// 拿到公钥
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))
module.exports = { 
  APP_PORT, 
  MYSQL_HOST, 
  MYSQL_PORT, 
  MYSQL_DATABASE, 
  MYSQL_ROOT, 
  MYSQL_PASSWORD }  = process.env;
  // 导出秘钥公钥
  module.exports.PRIVATE_KEY = PRIVATE_KEY
  module.exports.PUBLIC_KEY = PUBLIC_KEY
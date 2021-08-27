// 利用dotenv拿目录下的env配置文件信息
const dotenv = require('dotenv');
dotenv.config();

module.exports = { 
  APP_PORT, 
  MYSQL_HOST, 
  MYSQL_PORT, 
  MYSQL_DATABASE, 
  MYSQL_ROOT, 
  MYSQL_PASSWORD }  = process.env;

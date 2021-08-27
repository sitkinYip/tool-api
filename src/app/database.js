// 创建一个mysql连接池
const mysql = require('mysql2');
const config = require('./config');
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_ROOT,
  password: MYSQL_PASSWORD,
});
connections.getConnection((err,conn) => {
  if(err) {
    console.log(err)
    return
  }
  conn.connect((err) => {
    if(err) {
      console.log('连接失败')
    } else {
      console.log('连接成功！')
    }
  })
})

module.exports = connections.promise();

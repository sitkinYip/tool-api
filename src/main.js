const app = require('./app')
const config = require('./app/config')
// 启动mysql连接池
require('./app/database')
// 启动服务器
app.listen(config.APP_PORT, () => {
  console.log('启动成功！')
})
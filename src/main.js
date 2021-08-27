const Koa = require('koa');
const app = new Koa()
const config = require('./app/config')
app.listen(config.APP_PORT, () => {
  console.log(config.APP_PORT)
  console.log('启动成功！')
})
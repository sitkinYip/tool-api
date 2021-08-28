const fs = require('fs')
// 在主页传入app后引入所有路由并且一并注册的方法
const useRouter = (app) => {
  fs.readdirSync(__dirname).forEach(file => {
    if(file === 'index.js') return
    const router = require(`./${file}`)
    app.use(router.routes());
    app.use(router.allowedMethods());
  })
}

module.exports = useRouter
const Router = require('koa-router');
const addRouter = new Router({prefix: '/add'})

addRouter.post('/landing')

module.exports = addRouter
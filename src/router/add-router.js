const Router = require('koa-router');
// 引入添加数据的函数
const { createRecord } = require('../controller/record-controller');
const addRouter = new Router({ prefix: '/add' });
const { verifyAuth } = require('../middleware/auth-middleware');
// 添加一个备案
addRouter.post('/record', verifyAuth, createRecord);

module.exports = addRouter;

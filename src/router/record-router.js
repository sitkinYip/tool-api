const Router = require('koa-router');
// 引入添加数据的函数
const { createRecord, getRecordData } = require('../controller/record-controller');
const recordRouter = new Router({ prefix: '/record' });
const { verifyAuth } = require('../middleware/auth-middleware');
// 添加一个备案
recordRouter.post('/add', verifyAuth, createRecord);
// 获取备案信息（传id给单条 不传id给全部）
// addRouter
recordRouter.get('/list', getRecordData);
module.exports = recordRouter;

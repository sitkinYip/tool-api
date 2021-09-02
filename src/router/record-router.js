const Router = require('koa-router');
// 引入添加数据的函数
const { createRecord, getRecordData, updateRecordData, deleteRecord } = require('../controller/record-controller');
const recordRouter = new Router({ prefix: '/record' });
// 校验是否已登录
const { verifyAuth } = require('../middleware/auth-middleware');
// 添加一个备案
recordRouter.post('/add', verifyAuth, createRecord);
// 修改一个备案
recordRouter.put('/update', verifyAuth, updateRecordData);
// 删除一个备案
recordRouter.delete('/del', verifyAuth, deleteRecord);
// 获取备案信息（传id给单条 不传id给全部）
recordRouter.get('/list', getRecordData);
module.exports = recordRouter;

const Router = require('koa-router');
// 引入添加数据的函数
const { createRecord, getRecordData, updateRecordData, deleteRecord, getRecordDetails } = require('../controller/record-controller');
const recordRouter = new Router({ prefix: '/record' });
// 校验是否已登录
const { verifyAuth } = require('../middleware/auth-middleware');
// 添加一个备案
recordRouter.post('/add', verifyAuth, createRecord);
// 修改一个备案
recordRouter.put('/update', verifyAuth, updateRecordData);
// 删除一个备案
recordRouter.delete('/del', verifyAuth, deleteRecord);
// 获取备案列表
recordRouter.get('/list', getRecordData);
// 获取备案详情
recordRouter.get('/details', verifyAuth, getRecordDetails)
module.exports = recordRouter;

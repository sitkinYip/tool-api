const Router = require('koa-router');
// 校验是否已登录
const { verifyAuth } = require('../middleware/auth-middleware');
// 文件处理方法
const { templateHandler } = require('../middleware/template-middleware');
console.log(templateHandler);
// ejs模板处理函数
const {
  createTemplate,
  getTemplateList,
  getTemplate,
  deleteTemplate,
  updateTemplate,
} = require('../controller/template-controller');
const templateRouter = new Router({ prefix: '/template' });
// 新增一个ejs落地页模板
templateRouter.post('/create', verifyAuth, templateHandler, createTemplate);
// 更换模板
templateRouter.put('/update', verifyAuth, templateHandler, updateTemplate);
// 模板列表
templateRouter.get('/list', verifyAuth, getTemplateList);
// 模板详情
templateRouter.get('/details', verifyAuth, getTemplate)
// 删除模板
templateRouter.delete('/del', verifyAuth, deleteTemplate);
module.exports = templateRouter;

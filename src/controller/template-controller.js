const errorTypes = require('../constants/error-types');
const { createTemplate, templateDetails, deleteTemplate, updateTemplate, templateList } = require('../service/template-service');
// 参数校验
function isQuery(query) {
  return !(query ? String(query).trim() : null);
}
class template {
  async createTemplate(ctx, next) {
    const { mimetype, filename, size } = ctx.req.file;
    const { name, template_url, platform_id } = ctx.req.body;
    const user_id = ctx.user.id;
    const result = await createTemplate({ mimetype, filename, size, name, template_url, platform_id, user_id });
    ctx.body = {
      status: true,
      result,
      message: '添加成功',
    };
  }
  async getTemplateList(ctx, next) {
    const { name, page, pageSize, platform_id } = ctx.request.query;
    const result = await templateList({ name, page, pageSize, platform_id })
    ctx.body = {
      status: true,
      result
    }
  }
  async getTemplate(ctx, next) {
    const id = ctx.request.query.id;
    if(isQuery(id)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    const result = await templateDetails(id);
    ctx.body = {
      status: true,
      result,
    };
  }
  async deleteTemplate(ctx, next) {
    const id = ctx.request.query.id;
    if(isQuery(id)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    const result = await deleteTemplate(id);
    ctx.body = {
      status: true,
      result,
      message: '删除成功！',
    };
  }
  async updateTemplate(ctx, next) {
    const { mimetype, filename, size } = ctx.req.file;
    const { name, template_url, platform_id, id } = ctx.req.body;
    const user_id = ctx.user.id;
    const result = await updateTemplate({ name, template_url, platform_id, id, mimetype, filename, size, user_id });
    ctx.body = {
      status: true,
      result,
      message: '更新成功！',
    };
  }
}

module.exports = new template();

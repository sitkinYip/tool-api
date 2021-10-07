const { createRecord, getRecord, updateRecord, deleteRecord, validId } = require('../service/record-service');
const errorTypes = require('../constants/error-types');
class record {
  // 添加备案
  async createRecord(ctx, next) {
    // 拿user_id
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    // 备案不能为空
    if (!ctx.request.body.content) {
      const error = new Error(errorTypes.RECORD_NOT_NULL);
      return ctx.app.emit('error', error, ctx);
    }
    const result = await createRecord({ userId, content });
    ctx.body = {
      status: true,
      code: 200,
      data: { result },
      msg: '添加成功',
    };
  }
  // 拿备案列表
  async getRecordData(ctx, next) {
    const { name, page, pageSize } = ctx.request.query;
    const result = await getRecord(name, page, pageSize);
    ctx.body = {
      status: true,
      code: 200,
      data: { ...result },
    };
  }

  // 更新备案列表
  async updateRecordData(ctx, next) {
    console.log(ctx.request.body)
    const { content, id } = ctx.request.body;
    const user_id = ctx.user.id;
    if (!(id ? String(id).trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    if (!(content ? content.trim() : null)) return ctx.app.emit('error', new Error(errorTypes.RECORD_NOT_NULL), ctx);
    const result = await updateRecord({ content, id, user_id });
    ctx.body = {
      status: true,
      code: 200,
      data: { result },
      msg: '更新成功！',
    };
  }

  // 删除备案
  async deleteRecord(ctx, next) {
    const id = ctx.request.query.id;
    if (!(id ? String(id).trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    // 验证id是否存在
    const data = await validId(id);
    if (!data[0]) return ctx.app.emit('error', new Error(errorTypes.ID_ERROR), ctx);
    const result = await deleteRecord(id);
    ctx.body = {
      status: true,
      code: 200,
      data: { result },
      msg: '备案已被删除！',
    };
  }

  // 拿详情
  async getRecordDetails(ctx, next) {
    const id = ctx.request.query.id;
    if (!(id ? String(id).trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    const result = await validId(id);
    ctx.body = {
      status: true,
      code: 200,
      data: { result: result[0] },
    };
  }
}

module.exports = new record();

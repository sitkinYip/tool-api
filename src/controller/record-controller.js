const { createRecord } = require('../service/add-service')
const errorTypes = require('../constants/error-types');
class add {
  // 添加备案
  async createRecord(ctx, next) {
    // 拿user_id
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    // 备案不能为空
    if(!ctx.request.body.content) {
      const error = new Error(errorTypes.RECORD_NOT_NULL)
      return ctx.app.emit('error', error, ctx)
    }
    const result = await createRecord({userId,content})
    ctx.body = {
      status: true,
      data: result,
      message: '添加成功'
    }
  }
}

module.exports = new add()
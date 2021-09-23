const errorTypes = require('../constants/error-types');
// 数据库方法
const { createPlatform, getPlatformList, updatePlatform, deletePlatform, getDetails } = require('../service/platform-service');
class platform {
  // 新增一个平台
  async createPlatform(ctx, next) {
    // 拿user_id
    const user_id = ctx.user.id;
    // 拿平台类型名字和名字
    const { name, type_name } = ctx.request.body;
    if (!name && !type_name) return ctx.app.emit('error', new Error(errorTypes.NAME_NOT_NULL), ctx);
    const result = await createPlatform({
      user_id,
      name,
      type_name,
    });
    ctx.body = {
      status: true,
      data: result,
      message: '添加成功',
    };
  }
  // 拿平台列表
  async getPlatformList(ctx, next) {
    const { name, page, pageSize } = ctx.request.query;
    const result = await getPlatformList({ name, page, pageSize });
    ctx.body = {
      status: true,
      ...result,
    };
  }
  // 拿平台详情
  async getPlatformDetails(ctx, next) {
    const id = ctx.request.query.id;
    if (!(id ? id.trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    const result = await getDetails(id);
    ctx.body = {
      status: true,
      result,
    };
  }
  // 删除一条平台数据
  async deletePlatform(ctx, next) {
    const id = ctx.request.query.id;
    if (!(id ? id.trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    const result = await deletePlatform(id);
    ctx.body = {
      status: true,
      result,
      message: '平台已被删除！',
    };
  }
  // 更新平台
  async updatePlatform(ctx, next) {
    // 拿user_id
    const user_id = ctx.user.id;
    // 拿平台类型名字和名字
    const { name, type_name, id } = ctx.request.body;
    if (!(id ? id.trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    if (!name && !type_name) return ctx.app.emit('error', new Error(errorTypes.NAME_NOT_NULL), ctx);
    const result = await updatePlatform({ name, type_name, id, user_id });
    ctx.body = {
      status: true,
      result,
      message: '更新成功！',
    };
  }
}

module.exports = new platform();

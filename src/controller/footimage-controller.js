const errorTypes = require('../constants/error-types');
const { createFootImg, footImgList } = require('../service/file-service');
class footImg {
  // 新增一个底图
  async createFootImage(ctx, next) {
    const { mimetype, filename, size } = ctx.req.file;
    const { name } = ctx.req.body;
    if (!(name ? name.trim() : null)) return ctx.app.emit('error', new Error(errorTypes.NAME_NOT_NULL), ctx);
    const result = await createFootImg({ name, mimetype, filename, size, user_id: ctx.user.id });
    ctx.body = {
      status: true,
      result,
    };
  }
  // 拿底图列表
  async getFootList(ctx, next) {
    const id = ctx.request.query.id;
    const result = await footImgList(id);
    ctx.body = {
      status: true,
      result,
    };
  }
}

module.exports = new footImg();

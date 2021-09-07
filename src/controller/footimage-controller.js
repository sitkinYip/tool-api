const errorTypes = require('../constants/error-types');
const { createFootImg, footImgList, updateFootImg } = require('../service/file-service');
const { APP_PORT, MYSQL_HOST } = require('../app/config');
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
    let result = await footImgList(id);
    let list = result.map(({ id, filename, name, mimetype, size, user_id, createAt, updateAt }) => {
      return {
        id,
        filename,
        name,
        mimetype,
        size,
        user_id,
        createAt,
        updateAt,
        url: MYSQL_HOST + ':' + APP_PORT + '/images/' + filename,
      };
    });
    ctx.body = {
      status: true,
      list,
    };
  }
  // 更新底图列表
  async updateFootImage(ctx, next) {
    const { mimetype, filename, size } = ctx.req.file;
    const { name, id } = ctx.req.body;
    if (!(name ? name.trim() : null)) {
      return ctx.app.emit('error', new Error(errorTypes.NAME_NOT_NULL), ctx);
    }
    if (!(id ? String(id).trim() : null)) {
      return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    }
    const result = await updateFootImg({ name, mimetype, filename, size, user_id: ctx.user.id, id });
    return ctx.body = {
      status: true,
      message: '更新成功',
      result,
    }
  }
}

module.exports = new footImg();

const errorTypes = require('../constants/error-types');
const { createFootImg, footImgList, validId, updateFootImg, delFootImage } = require('../service/file-service');
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
      message: '添加成功！'
    };
  }
  // 拿底图列表
  async getFootList(ctx, next) {
    const { name, page, pageSize } = ctx.request.query;
    let result = await footImgList(name, page, pageSize);
    // console.log(result)
    let list = result.result.map(({ id, filename, name, mimetype, size, user_id, createAt, updateAt }) => {
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
      count: result.count,
    };
  }
  // 底图列表详情
  async getFootImgDetails(ctx, next) {
    const id = ctx.request.query.id;
    if (!(id ? String(id).trim() : null)) {
      return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    }
    let result = await validId(id);
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
      result: list[0],
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
    ctx.body = {
      status: true,
      message: '更新成功',
      result,
    };
  }
  // 删除底图
  async delFootImage(ctx, next) {
    const id = ctx.request.query.id;
    if (!(id ? id.trim() : null)) return ctx.app.emit('error', new Error(errorTypes.ID_NOT_NULL), ctx);
    const data = await validId(id);
    if(!data[0]) return ctx.app.emit('error', new Error(errorTypes.ID_ERROR), ctx);
    const result = await delFootImage(id);
    ctx.body = {
      status: true,
      message: '数据已被删除！',
      result,
    };
  }
}

module.exports = new footImg();

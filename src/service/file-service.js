const connection = require('../app/database');
const fs = require('fs');
// 拿封装好的sql方法
const { getList } = require('../utils/sql-mapping');
class uploadFile {
  // 添加一个图片
  async createFootImg(params) {
    let { filename, mimetype, size, name, user_id } = params;
    const statement = `INSERT INTO footimg (filename, name, mimetype,size, user_id) VALUES (?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [filename, name, mimetype, size, user_id]);
    return result;
  }
  // 拿底部图片列表
  async footImgList(name, page, pageSize) {
    const result = await getList(
      {
        name,
        page,
        pageSize,
      },
      'footimg'
    );
    return result;
  }
  // 更新图片
  async updateFootImg(params) {
    let { filename, mimetype, size, name, user_id, id } = params;
    // 查询文件名称并且删除
    const statementFile = `SELECT * FROM footimg WHERE id = ?;`;
    const fileName = await connection.execute(statementFile, [id]);
    // 判断文件是否存在
    try {
      // 判断文件是否存在
      fs.statSync('./file/images/' + fileName[0][0].filename);
      //如果可以执行到这里那么就表示存在了
      // 更新后删除原来的文件
      fs.unlink('./file/images/' + fileName[0][0].filename, function (err) {});
    } catch (e) {
      //捕获异常
      console.log(e);
    }
    // 更新列表
    const statement = `UPDATE footimg SET filename=?,mimetype=?,size=?,name=?,user_id=? WHERE id=?;`;
    const result = await connection.execute(statement, [filename, mimetype, size, name, user_id, id]);
    return result;
  }
  // 删除底图
  async delFootImage(id) {
    // 先删除文件 再删除数据
    const statementFile = `SELECT * FROM footimg WHERE id=?;`;
    const fileName = await connection.execute(statementFile, [id]);
    // 判断文件是否存在
    try {
      // 判断文件是否存在
      fs.statSync('./file/images/' + fileName[0][0].filename);
      //如果可以执行到这里那么就表示存在了
      // 更新后删除原来的文件
      fs.unlink('./file/images/' + fileName[0][0].filename, function (err) {});
    } catch (e) {
      //捕获异常
      console.log(e);
    }
    // 删除数据库数据
    const statement = `DELETE FROM footimg WHERE id=?;`;
    const result = await connection.execute(statement, [id]);
    return result;
  }
  // 详情及删除时校验参数是否存在
  async validId(id) {
    const statement = `SELECT * FROM footimg WHERE id=?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new uploadFile();

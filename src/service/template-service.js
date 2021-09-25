// 引入连接池
const connection = require('../app/database');
const fs = require('fs');
const { getList } = require('../utils/sql-mapping');
class templateService {
  async createTemplate(params) {
    const { mimetype, filename, size, name, template_url, platform_id, user_id } = params;
    const statement = `INSERT INTO template (mimetype, filename, size, name, template_url, platform_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [mimetype, filename, size, name, template_url, platform_id, user_id]);
    return result;
  }
  async updateTemplate(params) {
    const { mimetype, filename, size, name, template_url, platform_id, user_id, id } = params;
    // 先删掉本地文件再更新
    // 查询文件名称并且删除
    const statementFile = `SELECT * FROM template WHERE id = ?;`;
    const fileName = await connection.execute(statementFile, [id]);
    // 判断文件是否存在
    try {
      // 判断文件是否存在
      fs.statSync('./file/template/' + fileName[0][0].filename);
      //如果可以执行到这里那么就表示存在了
      // 更新后删除原来的文件
      fs.unlink('./file/template/' + fileName[0][0].filename, function (err) {});
    } catch (e) {
      //捕获异常
      console.log(e);
    }
    const statement = `UPDATE template SET mimetype=?,filename=?,size=?,name=?,template_url=?,platform_id=?,user_id=? WHERE id=?;`;
    const result = await connection.execute(statement, [mimetype, filename, size, name, template_url, platform_id, user_id, id]);
    return result;
  }
  async deleteTemplate(id) {
    // 先删掉本地文件再删除数据
    // 查询文件名称并且删除
    const statementFile = `SELECT * FROM template WHERE id = ?;`;
    const fileName = await connection.execute(statementFile, [id]);
    // 判断文件是否存在
    try {
      // 判断文件是否存在
      fs.statSync('./file/template/' + fileName[0][0].filename);
      //如果可以执行到这里那么就表示存在了
      // 更新后删除原来的文件
      fs.unlink('./file/template/' + fileName[0][0].filename, function (err) {});
    } catch (e) {
      //捕获异常
      console.log(e);
    }
    // 删除数据
    const statement = `DELETE FROM template WHERE id=?;`;
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async templateList(params) {
    const { name, page, pageSize, platform_id } = params;
    const result = await getList(
      {
        name,
        page,
        pageSize,
      },
      'template',
      platform_id ? 'platform_id' : 'name'
    );
    return result;
  }
  async templateDetails(id) {
    const statement = `SELECT * FROM template WHERE id = ?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new templateService();

const connection = require('../app/database');
// 拿封装好的sql方法
const { getList } = require('../utils/sql-mapping');
class recordService {
  // 添加备案
  async createRecord(params) {
    const { userId, content } = params;
    const statement = `INSERT INTO record (user_id,content) VALUES (?,?);`;
    const result = await connection.execute(statement, [userId, content]);
    return result;
  }
  // 获取备案列表
  async getRecord(name, page, pageSize) {
    /* let statement = `
    SELECT
    r.id id, r.content content, r.createAt createTime, r.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) user
     FROM record r
    LEFT JOIN users u ON r.user_id = u.id
    `;
    statement = statement + (id ? ' WHERE r.id = ?;' : ';');
    const result = await connection.execute(statement, id ? [id] : []);
    return result[0]; */
    const result = await getList({
      name,
      page,
      pageSize
    },'record','content')
    return result
  }  
  // 更新备案
  async updateRecord(params) {
    const { id, content } = params;
    const statement = `UPDATE record SET content=? WHERE id=?;`;
    const result = await connection.execute(statement, [content, id]);
    return result;
  }
  // 删除备案
  async deleteRecord(id) {
    const statement = `DELETE FROM record WHERE id=?;`
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async getRecordDetails(id) {

  }
  // 校验参数是否存在
  async validId(id) {
    const statement = `SELECT * FROM record WHERE id=?;`
    console.log(statement)
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new recordService();

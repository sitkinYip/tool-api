const connection = require('../app/database');
class recordService {
  // 添加备案
  async createRecord(params) {
    const { userId, content } = params;
    const statement = `INSERT INTO record (user_id,content) VALUES (?,?);`;
    const result = await connection.execute(statement, [userId, content]);
    console.log(result);
    return result;
  }
  // 获取备案列表
  async getRecord(id) {
    let statement = `
    SELECT
    r.id id, r.content content, r.createAt createTime, r.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) user
     FROM record r
    LEFT JOIN users u ON r.user_id = u.id
    `
    statement = statement +( id ? ' WHERE r.id = ?;' : ';');
    const result = await connection.execute(statement, id ? [id] : []);
    return result[0];
  }
}

module.exports = new recordService();

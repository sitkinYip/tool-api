const connection = require('../app/database');
class addService {
  // 添加备案
  async createRecord(params) {
    const { userId, content } = params;
    const statement = `INSERT INTO record (user_id,content) VALUES (?,?);`;
    console.log(statement)
    const result = await connection.execute(statement, [userId, content]);
    console.log(result)
    return result;
  }
}

module.exports = new addService()

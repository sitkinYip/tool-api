const connection = require('../app/database');
// 拿封装好的sql方法
const { getList } = require('../utils/sql-mapping');
class platformService {
  // 新增平台
  async createPlatform(params) {
    const { type_name, name, user_id } = params;
    const statement = `INSERT INTO platform (type_name,name,user_id) VALUES (?,?,?);`;
    const result = await connection.execute(statement, [type_name, name, user_id]);
    return result;
  }
  // 拿平台列表
  async getPlatformList(params) {
    const { name, page, pageSize } = params;
    const result = await getList(
      {
        name,
        page,
        pageSize,
      },
      'platform'
    );
    return result;
  }
  // 更新平台数据
  async updatePlatform(params) {
    const { id, name, type_name, user_id } = params;
    const statement = `UPDATE platform SET name=?,type_name=?,user_id=? WHERE id=?;`;
    const result = await connection.execute(statement, [name, type_name, user_id, id]);
    return result;
  }
  // 删除平台数据
  async deletePlatform(id) {
    const statement = `DELETE FROM platform WHERE id=?;`;
    const result = await connection.execute(statement, [id]);
    return result;
  }
  // 平台详情
  async getDetails(id) {
    const statement = `SELECT * FROM platform WHERE id=?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}
module.exports = new platformService();

const connection = require('../app/database');
// sql语句的封装
class sql_map {
  async getList(params,tabName,searchName) {
    let { name, page, pageSize } = params;
    // name要模糊搜索所以预处理一下
    name = '%' + (name ? name : '') + '%';
    // 拿总页数
    const countStatement = `SELECT count(*) as totalCount FROM ${tabName} WHERE ${searchName?searchName:'name'} LIKE ?;`;
    const [counts] = await connection.execute(countStatement, [name]);
    // 翻页如果不存在就给默认值
    page || (page = 1);
    pageSize || (pageSize = counts[0].totalCount);
    // 第几条开始查
    const start = pageSize * (page - 1);
    const statement = `SELECT * FROM ${tabName} WHERE ${searchName?searchName:'name'} LIKE ? LIMIT ${start},${pageSize};`;
    const [result] = await connection.execute(statement, [name]);
    return {
      count: counts[0].totalCount,
      result,
    };
  }
}

module.exports = new sql_map()

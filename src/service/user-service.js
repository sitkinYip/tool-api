// 引入连接池
const connection = require('../app/database')

class UserService {
  // 用户注册数据库方法
  async create(user) {
    const {name, password} = user;
    const statement = `INSERT INTO users (name,password) VALUES (?,?);`
    const result = await connection.execute(statement, [name,password])
    // 把user存数据库
    return result;
  }
  // 查询存不存在这个用户
  async getUserName(name) {
    const statement = 'SELECT * FROM users WHERE name = ?;'
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new UserService()
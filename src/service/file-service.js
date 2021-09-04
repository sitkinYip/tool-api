const connection = require('../app/database');

class uploadFile {
  // 添加一个图片
  async createFootImg(params) {
    let { filename, mimetype, size, name, user_id } = params;
    const statement = `INSERT INTO footimg (filename, name, mimetype,size, user_id) VALUES (?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [filename, name, mimetype, size, user_id]);
    return result;
  }
  // 拿底部图片列表
  async footImgList(id) {
    const statement = `SELECT * FROM footimg`+(id?' WHERE id = ?;':';');
    console.log(statement);
    const [result] = await connection.execute(statement, id?[id]:[]);
    return result
  }
  // 校验参数是否存在
  async validId(id) {
    const statement = `SELECT * FROM footimg WHERE id=?;`
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new uploadFile();

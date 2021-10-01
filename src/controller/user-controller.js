
const service = require('../service/user-service')
class UserController {
  // 创建用户方法
  async create(ctx, next) {
     // 获取用户请求传递的参数
    const user = ctx.request.body;
     // 查询数据库
     const result = await service.create(user)
     // 返回数据
     ctx.body = {
       code: 200,
       status: true,
       data: {
        result
       }
     }
  }
}

module.exports = new UserController()
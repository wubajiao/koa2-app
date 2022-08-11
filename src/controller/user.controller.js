/*
 * @Descripttion : 用户控制器，查询数据返回后的处理
 * @Author       : wuhaidong
 * @Date         : 2022-08-11 16:22:58
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-11 17:50:09
 */
const { UserRegisterError } = require('../error/error')

class UserController {
  async UserRegister(ctx, next) {
    try {
      // console.log(dfsgsd) // 没有这个变量，所以会走catch
      ctx.body = {
        code: 0,
        message: '注册成功',
        result: 'ok',
      }
    } catch (error) {
      ctx.app.emit('error', UserRegisterError, ctx) // 出发error事件
    }
  }
}

module.exports = new UserController()

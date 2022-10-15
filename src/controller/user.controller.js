/*
 * @Descripttion : 用户控制器，查询数据返回后的处理
 * @Author       : wuhaidong
 * @Date         : 2022-08-11 16:22:58
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-15 21:22:06
 */
const { UserRegisterError } = require('../error/error')

class UserController {
  async UserRegister(ctx, next) {
    console.log(
      '🚀 ~ file: user.controller.js ~ line 12 ~ UserController ~ UserRegister ~ ctx',
      ctx.request
    )
    try {
      const { name, password } = ctx.request.body
      console.log(name, password)
      ctx.body = {
        // message: '注册陈工',
        message: {
          name,
          password,
        },
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: user.controller.js ~ line 26 ~ UserController ~ UserRegister ~ error',
        error
      )
      ctx.app.emit('error', UserRegisterError, ctx) // 出发error事件
    }
  }
}

module.exports = new UserController()

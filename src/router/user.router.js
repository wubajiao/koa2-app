/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:51:37
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-11 16:28:25
 */
const Router = require('@koa/router')
const router = new Router({ prefix: '/user' })
const { UserRegister } = require('../controller/user.controller')

router.get('/add', (ctx, next) => {
  ctx.body = '用户添加成功！'
})

router.post('/register', UserRegister)

module.exports = router

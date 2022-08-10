/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:51:37
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-10 16:23:26
 */
const Router = require('@koa/router')
const router = new Router({ prefix: '/user' })

router.get('/add', (ctx, next) => {
  ctx.body = '用户添加成功！'
})

module.exports = router

/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:51:37
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-10 16:23:19
 */
const Router = require('@koa/router')
const router = new Router({ prefix: '/role' })

router.get('/add', (ctx, next) => {
  ctx.body = '角色添加成功！'
})

module.exports = router

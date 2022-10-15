/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:51:37
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-15 17:44:42
 */
const Router = require('@koa/router')
const router = new Router({ prefix: '/user' })
const { UserRegister } = require('../controller/user.controller')
console.log('🚀 ~ file: user.router.js ~ line 11 ~ UserRegister', UserRegister)
// const koaBody = require('koa-body')

router.get('/add', (ctx, next) => {
  ctx.body = '用户添加成功！'
})

router.post('/register', UserRegister)

module.exports = router

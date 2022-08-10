/*
 * @Descripttion : 路由集中处理
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 16:10:28
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-10 16:21:28
 */
const fs = require('fs') // node文件处理模块
const Router = require('@koa/router')
const router = new Router()

// 自动引入router
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    let r = require('./' + file)
    router.use(r.routes())
  }
})

module.exports = router

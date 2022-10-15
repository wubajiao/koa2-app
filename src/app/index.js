/*
 * @Descripttion : 目的是把koa-router以及后续的全局中间件和第三方库引入聚合在这里集中管理。
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:58:30
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-15 17:55:13
 */
const Koa = require('koa')
const koaBody = require('koa-body')
// const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(
  koaBody({
    multipart: true, // 允许上传多个文件
  })
)

const router = require('../router/index')
app.use(router.routes()).use(router.allowedMethods()) // allowedMethods koa-router的中间件，用于处理请求方式不同进行特殊处理;

// app.use(bodyParser())
app.on('error', (err, ctx) => {
  // console.log('🚀 ~ file: index.js ~ line 19 ~ app.on ~ err', err)
  // let status = 500
  // switch (err.code) {
  //   case '10001':
  //     status = 400
  //     break
  //   case '10002':
  //     status = 409
  //     break
  //   default:
  //     status = 500
  // }
  // ctx.status = status
  // ctx.body = err
})

module.exports = app // 导出

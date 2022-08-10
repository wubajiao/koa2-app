/*
 * @Descripttion : 目的是把koa-router以及后续的全局中间件和第三方库引入聚合在这里集中管理。
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:58:30
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-10 16:19:53
 */
const Koa = require('koa')
const app = new Koa()
const router = require('../router/index')
app.use(router.routes()).use(router.allowedMethods()) // allowedMethods koa-router的中间件，用于处理请求方式不同进行特殊处理;

module.exports = app // 导出

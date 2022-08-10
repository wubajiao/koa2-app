/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:23:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-10 16:03:22
 */
const { PORT } = require('./config/config.dotenv')
// const Koa = require('koa')
// const app = new Koa()
const app = require('./app/index')
// app.use((ctx, next) => {
//   ctx.body = 'hello koa'
// })

app.listen(PORT, () => {
  console.log(`启动的服务的端口是http://localhost:${PORT}`)
})

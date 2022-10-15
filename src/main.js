/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 15:23:10
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-15 17:54:43
 */
const { PORT } = require('./config/config.dotenv')
const app = require('./app/index')

app.listen(PORT, () => {
  console.log(`启动的服务的端口是http://localhost:${PORT}`)
})

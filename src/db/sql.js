/*
 * @Descripttion : 数据库连接
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 16:26:43
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-11 15:49:26
 */
const { Sequelize } = require('sequelize')

// koa数据库名，root用户名，663342whd数据库密码
const seq = new Sequelize('koa', 'root', '663342whd', {
  host: 'localhost',
  dialect: 'mysql',
})

seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功！')
  })
  .catch((error) => {
    console.log('数据库连接失败！', error)
  })

module.exports = seq

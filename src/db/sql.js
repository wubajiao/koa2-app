/*
 * @Descripttion : 数据库连接
 * @Author       : wuhaidong
 * @Date         : 2022-08-10 16:26:43
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-10 16:32:50
 */
const { Sequelize } = require('sequelize')

// koaDemo数据库名，root用户名，xxx数据库密码
const seq = new Sequelize('koaDemo', 'root', 'xxx', {
  host: 'localhost',
  dialect: 'mysql',
})

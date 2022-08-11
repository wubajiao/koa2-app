/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2022-08-11 15:35:16
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-08-11 15:52:15
 */
const { DataTypes } = require('sequelize')
const seq = require('../db/sql')

// 创建user表，name,password 为user表的字段
const User = seq.define('users', {
  name: {
    type: DataTypes.STRING, // 数据类型，更多数据类型参考：https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
    allowNull: false, // 类参数，是否为空
    unique: true, // 列参数，创建唯一约束，
    comment: '用户名，唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '用户密码',
  },
})

User.sync() // 模型同步

module.exports = User

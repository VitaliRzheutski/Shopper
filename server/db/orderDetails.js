const Sequelize = require('sequelize')
const db = require('./database');

const orderDetail = db.define('orderDetail', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productPrice: {
    type: Sequelize.INTEGER
  }
})



module.exports = orderDetail

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
orderDetail.addProduct = async function(productId, orderId, productPrice) {
  await orderDetail.create(productId, orderId, productPrice)
}


module.exports = orderDetail

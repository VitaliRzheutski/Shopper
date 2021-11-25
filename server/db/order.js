const Sequelize = require('sequelize');
const db = require('./database');
const Order = db.define("order", {
    isPurchased: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
})

module.exports = Order;
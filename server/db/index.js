// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const orderDetail = require('./orderDetails')

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
User.hasMany(Order);
Order.belongsTo(User);


Product.belongsToMany(Order,{
  through:{
    model:'orderDetail',
    as:'productId',
    unique:false
  }
});
Order.belongsToMany(Product, {
  through: {
    model: 'orderDetail',
    as: 'orderId',
    unique: false
  }
})
// db.sync({
//   force: true
// });

module.exports = {
  // Include your models in this exports object as well!
  db,
  Product,
  User,
  Order,
  orderDetail
  
}

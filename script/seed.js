'use strict'
// const db = require('../server/db/database'); 
// const User = require('../server/db/user');
// const Order = require('../server/db/order');
// const Product = require('../server/db/product');
// const OrderDetail = require('../server/db/orderDetails')
const {db,User,Order,Product, orderDetail} = require('../server/db')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  const userData = [
    {
      firstName: 'Cody',
      lastName: 'Pug',
      address: '620 Riss Pl',
      email: 'cody@email.com',
      imageUrl: 'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg',
    },
    {
      firstName: 'Vitali',
      lastName: 'Rzheutski',
      address: '34 West 139th Street',
      email: 'vitalrzheutsky@email.com',
      imageUrl: 'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg',
    },
    {
      firstName: 'Hanna',
      lastName: 'Rzheutskaya',
      address: '34 West 139th Street',
      email: 'hanna@email.com',
      imageUrl: 'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg',
    }
  ]
  const users = await Promise.all([User.bulkCreate(userData, { validate: true })])
  const orderData = [
    {
      isPurchased: false,
      userId: 1
    },
    {
      isPurchased: true,
      userId: 2
    },]

  const orders = await Promise.all([
    Order.bulkCreate(orderData, { validate: true })
  ])
  const productData = [
    {
      productName: 'Iphone',
      description: 'Apple Iphone 13 Pro Max',
      imageUrl:
        'https://img.xfinitymobile.com/image/fetch/e_trim/w_420,h_420,c_fit,f_auto,q_auto,fl_lossy/https%3A%2F%2Fimg.xfinitymobile.com%2Fimage%2Fupload%2Fv1632144927%2Fclient%2Fcatalog%2Fdevices%2Fapple%2FiPhone_13_Pro_Max_Silver_PRI.png',
      price: 1200,
      quantity: 1000
    },
    {
      productName: 'Iphone',
      description: 'Apple Iphone 13 Pro',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652954000',
      price: 1100,
      quantity: 4000
    },
    {
      productName: 'MacBook Pro',
      description: 'Apple MacBook Pro',
      imageUrl:
        'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg',
      price: 1300,
      quantity: 500
    }
  ]
  const products = await Promise.all([
    Product.bulkCreate(productData, { validate: true })
  ])
  const orderDetailData = [
    { productPrice: 1200, orderId: 1, productId: 1 },
    {productPrice: 1100, orderId: 2, productId: 2},
  ]
  const orderDetails = await Promise.all([
    orderDetail.bulkCreate(orderDetailData, { validate: true })
  ])
  // console.log(`Products ${products}`)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderDetails.length} orderDetails`)
  console.log(`seeded successfully`)
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

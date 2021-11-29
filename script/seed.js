'use strict'
const db = require('../server/db/database');
const User = require('../server/db/user');
const Order = require('../server/db/order');
const Product = require('../server/db/product');
const OrderDetail = require('../server/db/orderDetails')
async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  const userData = [
    {

      firstName: 'Cody',
      lastName: 'Pug',
      address: '620 Riss Pl',
      email: 'cody@email.com',
    },
    {
      firstName: 'Vitali',
      lastName: 'Rzheutski',
      address: '34 West 139th Street',
      email: 'vitalrzheutsky@email.com',
    },
    {
      firstName: 'Hanna',
      lastName: 'Rzheutskaya',
      address: '34 West 139th Street',
      email: 'hanna@email.com',
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
      userId: 5
    }, {
      isPurchased: true,
      userId: 5
    }]

  const orders = await Promise.all([
    Order.bulkCreate(orderData, { validate: true })
  ])
  const productData = [
    {
      productName: 'Iphone',
      description: 'Apple Iphone 13 Pro Max',
      imageUrl:
        'https://www.sgvtribune.com/wp-content/uploads/2019/03/iStock-999985068-1.jpg',
      price: 1200,
      quantity: 1000
    },
    {
      productName: 'Iphone',
      description: 'Apple Iphone 13 Pro',
      imageUrl:
        'https://www.sgvtribune.com/wp-content/uploads/2019/03/iStock-999985068-1.jpg',
      price: 1100,
      quantity: 4000
    },
    {
      productName: 'MacBook Pro',
      description: 'Apple IMacBook Pro',
      imageUrl:
        'https://www.sgvtribune.com/wp-content/uploads/2019/03/iStock-999985068-1.jpg',
      price: 1300,
      quantity: 500
    }
  ]
  const products = await Promise.all([
    Product.bulkCreate(productData, { validate: true })
  ])
  const orderDetailData = [
    { productPrice: 150, orderId: 4, productId: 4 },
    {productPrice: 49, orderId: 4, productId: 9},
    {productPrice: 197, orderId: 6, productId: 10},
  ]
  const orderDetails = await Promise.all([
    OrderDetail.bulkCreate(orderDetailData, { validate: true })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderDetails.length} orders`)
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

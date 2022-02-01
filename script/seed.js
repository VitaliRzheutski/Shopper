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
      password:'12345',
      isAdmin:true
    },
    {
      firstName: 'Vitali',
      lastName: 'Rzheutski',
      address: '34 West 139th Street',
      email: 'vitalrzheutsky@email.com',
      imageUrl: 'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg',
      password:'12345',
    },
    {
      firstName: 'Hanna',
      lastName: 'Rzheutskaya',
      address: '34 West 139th Street',
      email: 'hanna@email.com',
      imageUrl: 'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg',
      password:'12345',
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
      productName: 'Iphone 13 Pro',
      description: 'iPhone 13 Pro takes a huge leap forward, bringing incredible speed to everything you do and dramatic new photo and video capabilities — all in two great sizes.',
      imageUrl:
        'https://m.media-amazon.com/images/I/61jLiCovxVL.jpg',
      price: 999,
      quantity: 1000
    },
    {
      productName: 'Iphone 13 ',
      description: 'A lightning fast chip. A leap in battery life. And all new photo and video capabilities. iPhone 13 lets you do things you never could before — in two great sizes',
      imageUrl:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629842712000',
      price: 699,
      quantity: 4000
    },
    {
      productName: 'Iphone 12 ',
      description: 'A superpowerful chip. 5G speed. An advanced dual camera system. A Ceramic Shield front that is tougher than any smartphone glass. And a bright, beautiful OLED display.',
      imageUrl:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000',
      price: 599,
      quantity: 4000
    },
    {
      productName: 'Iphone SE ',
      description: 'iPhone SE packs our powerful A13 Bionic chip into a popular design at our most affordable price. It is just what you have been waiting for.',
      imageUrl:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-black-select-2020?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1586574260051',
      price: 399,
      quantity: 4000
    },
    {
      productName: 'Iphone 11 ',
      description: 'The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
      imageUrl:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144838',
      price: 499,
      quantity: 4000
    },
    {
      productName: 'MacBook Pro 13" model ',
      description: 'The Apple M1 chip gives the 13 inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000',
      price: 1300,
      quantity: 500
    },
    {
      productName: 'MacBook Pro 14" model ',
      description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000',
      price: 1999,
      quantity: 500
    },
    {
      productName: 'MacBook Pro 16" model ',
      description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000',
      price: 2499,
      quantity: 500
    },
    {
      productName: 'MacBook Air" ',
      description: 'Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000',
      price: 999,
      quantity: 500
    },
    {
      productName: 'iMac 24" model',
      description: 'Say hello to the new iMac.Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.',
      imageUrl:
        'https://www.apple.com/v/imac-24/d/images/specs/colors_blue__egmgwaytk3ue_large.jpg',
      price: 1799,
      quantity: 500
    },
    {
      productName: 'iMac 27" model',
      description: 'The 27 inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-27-cto-hero-202008?wid=1254&hei=1044&fmt=jpeg&qlt=80&.v=1594932848000',
      price: 1299,
      quantity: 500
    },
    {
      productName: 'Mac Pro',
      description: 'Power to change everything. Say hello to a Mac that is extreme in every way. With the greatest performance, expansion, and configurability yet.',
      imageUrl:
        'https://images.macrumors.com/article-new/2019/06/2019-mac-pro-side-and-front-800x581.jpg',
      price: 5999,
      quantity: 500
    },
    {
      productName: 'Mac Mini',
      description: 'The Apple M1 chip takes our most versatile, do-it-all desktop into another dimension. With up to 3x faster CPU performance. Up to 6x faster graphics. ',
      imageUrl:
        'https://www.apple.com/v/mac-mini/n/images/meta/mac-mini_overview__164prubpwpee_og.jpg',
      price: 699,
      quantity: 500
    },
    {
      productName: 'AirPods Pro',
      description: 'Enjoy superior sound quality with Adaptive EQ, which automatically tunes music to the shape of your ear for a rich, consistent listening experience.',
      imageUrl:
        'https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg',
      price: 249,
      quantity: 500
    },
    {
      productName: 'AirPods 3red Generation',
      description: 'A great sense of detection. An enhanced skin-detect sensor knows the difference between your ear and other surfaces, so audio only plays when you are wearing AirPods.',
      imageUrl:
        'https://m.media-amazon.com/images/I/61ZRU9gnbxL._AC_SX342_.jpg',
      price: 179,
      quantity: 500
    },
    {
      productName: 'AirPods 2nd Generation',
      description: 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience.',
      imageUrl:
        'https://i5.walmartimages.com/asr/ac793ff4-d3da-4cbe-beba-f956e7494490_1.5bae15688eb0aafd22a99d01a072f9db.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      price: 129,
      quantity: 500
    },
    {
      productName: 'AirPods Max',
      description: 'Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=80&.v=1633623988000',
      price: 549,
      quantity: 500
    },
    {
      productName: 'Apple Watch Series 3',
      description: 'The smart watch is an excellent portable device that goes with you everywhere. It is perfect for tracking workouts and checking messages when you cant get to your phone.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&.v=1594259786000',
      price: 299,
      quantity: 500
    },
    {
      productName: 'Apple Watch  SE',
      description: 'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUW3_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171100000,1630708651000',
      price: 349,
      quantity: 500
    },
    {
      productName: 'Apple Watch Series 7',
      description: 'The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet.',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML773_VW_34FR+watch-45-stainless-graphite-cell-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630042305000%2C1631661901000',
      price: 450,
      quantity: 500
    },
    {
      productName: 'Apple Watch Nike',
      description: 'Apple Watch Nike with the Nike Run Club app is your ultimate running partner. The new Nike watch face moves with you. Guided Runs give you a coach that cheers you on. And that is just the start. ',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML893_VW_34FR+watch-45-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171390000%2C1631662263000',
      price: 450,
      quantity: 500
    },
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

const router = require('express').Router()
const {Order, orderDetail, Product} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      // console.log('req.user:',req.user)
      const findOrder = await Order.findAll({
        where: {
          userId: req.user.id,  
          // isPurchased: true
        },
        include: {
          model: Product
        }
      })
      // console.log('findOrder::',findOrder)
      if (findOrder) res.json(findOrder)
      else res.send('You have not added any items to your cart yet!')
    } catch (error) {
      next(error)
    }
  })
//to ADD a product to the cart
  router.post('/', async (req, res, next) => {
    try {
      // console.log('req.user:',req.user)
      const [findOrder, created] = await Order.findOrCreate({
        where: {
          // sessionId: req.session.id,
          userId: req.user.id,
          isPurchased: false
        },
        include: {model: Product}
      })
      console.log('req.body:',req.body)
      const orderId = findOrder.id;
      const productId = req.body.productId.id; //undefined
      const productPrice = req.body.productId.price; //undefined
      // console.log('productPrice:',productPrice)
      // console.log('productId:',productId)
      // console.log('orderId:',orderId)
      orderDetail.create({productPrice,productId, orderId})
      console.log('Added product to the cart!')
      res.json(findOrder)
    } catch (error) {
      next(error)
    }
  })


router.delete('/', async (req, res, next) => {
  try {
    await orderDetail.destroy({
      where: {
        productId: req.body.productId
      }
    })
    res.send('deleted')
  } catch (error) {
    console.error(error)
  }
})

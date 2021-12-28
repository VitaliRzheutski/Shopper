const router = require('express').Router()
const {Order, orderDetail, Product} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      const findOrder = await Order.findAll({
        where: {
        //   userId: req.user.id,
          isPurchased: false
        },
        // include: {
        //   model: Product
        // }
      })
  
      if (findOrder) res.json(findOrder)
      else res.send('You have not added any items to your cart yet!')
    } catch (error) {
      next(error)
    }
  })

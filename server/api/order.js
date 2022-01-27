const router = require('express').Router()
const { Order, orderDetail, Product } = require('../db')
module.exports = router

//gets the cart
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



// to ADD a product to the cart
router.post('/', async (req, res, next) => {
  try {
    const [findOrder, created] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        isPurchased: false
      },
      include: { model: Product }
    })
    const orderId = findOrder.id;
    const productId = req.body.productId.id;
    const productPrice = req.body.productId.price;
    const product = await Product.findOne({
      where: {
        id: productId
      }
    })
    console.log('product.quantity:', product.quantity)

    const findOrderDetail = await orderDetail.findOne({
      where: {
        orderId: orderId,
        productId: productId
      }
    })
    // console.log('findOrderDetail:',findOrderDetail)
    if (findOrderDetail) {
      let newQuantity = findOrderDetail.quantity + 1;
      // console.log('newQuantity:',newQuantity)
      findOrderDetail.update({ quantity: newQuantity })
      product.quantity -= 1
      console.log('product.quantity after1:', product.quantity)
      
      Product.update(product.quantity, {
        where: {
          quantity: product.quantity
        }
      })

    

    } else {
      await orderDetail.create({ productPrice, productId, orderId });
      product.quantity -= 1
      console.log('product.quantity after2:', product.quantity)
      Product.update({ quantity: product.quantity })

    }
    res.json(findOrder)
  } catch (error) {
    next(error)
  }
})





router.delete('/delete/:productId', async (req, res, next) => {
  try {
    await orderDetail.destroy({
      where: {
        productId: req.params.productId
      }
    })
    res.send('deleted')
  } catch (error) {
    next(error)
  }
})


//this delete route decreases the amount of a product inside the cart
router.put('/decrease/:productId', async (req, res, next) => {
  try {
    const oneProduct = await orderDetail.findOne({
      where: {
        productId: req.params.productId
      }
    })
    let newQuantity = oneProduct.quantity - 1
    if (newQuantity >= 1) {
      await oneProduct.update({ quantity: newQuantity })
    } else {
      await oneProduct.destroy()
    }
    res.send('deleted')
  } catch (error) {
    console.error(error)
  }
})

router.put('/increase/:productId', async (req, res, next) => {
  try {
    const oneProduct = await orderDetail.findOne({
      where: {
        productId: req.params.productId
      }
    })
    let newQuantity = oneProduct.quantity + 1;
    if (newQuantity >= 1) {
      await oneProduct.update({ quantity: newQuantity })
    } else {
      await oneProduct.update({ quantity: newQuantity })
    }
    res.send('+1 item')
  } catch (error) {
    console.error(error)
  }
})
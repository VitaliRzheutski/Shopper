const router = require("express").Router();
const { Order, orderDetail, Product } = require("../db");
module.exports = router;

//gets the cart
router.get("/", async (req, res, next) => {
  try {
    const findOrder = await Order.findAll({
      where: {
        userId: req.user.id,
      },
      include: {
        model: Product,
      },
    });
    // in case there's only one product left in order(cart) => check if the order needs to be deleted(in case of no items in the cart)
    if (findOrder.length === 1) {
      const details = await orderDetail.findOne({
        where: {
          orderId: findOrder[0].dataValues.id,
        },
      });
      if (!details) {
        await findOrder[0].destroy();
      }

      if (findOrder) {
        res.json(findOrder);
      } else {
        res.send("You have not added any items to your cart yet!");
      }
    }
  } catch (error) {
    next(error);
  }
});

// to ADD a product to the cart
router.post("/", async (req, res, next) => {
  try {
    const [findOrder, created] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        isPurchased: false,
      },
      include: { model: Product },
    });
    const orderId = findOrder.id;
    const productId = req.body.productId.id;
    const productPrice = req.body.productId.price;
    const product = await Product.findOne({
      where: {
        id: productId,
      },
    });
    let q = product.quantity;

    const findOrderDetail = await orderDetail.findOne({
      where: {
        orderId: orderId,
        productId: productId,
      },
    });
    if (findOrderDetail) {
      let newQuantity = findOrderDetail.quantity + 1;
      findOrderDetail.update({ quantity: newQuantity });
      q -= 1;

      await Product.update(
        { quantity: q },
        {
          where: { id: productId },
        }
      );
    } else {
      await orderDetail.create({ productPrice, productId, orderId });
      q -= 1;
      await Product.update(
        { quantity: q },
        {
          where: { id: productId },
        }
      );
    }
    res.json(findOrder);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:productId", async (req, res, next) => {
  try {
    await orderDetail.destroy({
      where: {
        productId: req.params.productId,
      },
    });
    //check if user has an order
    //check if this order id is present in orderDetails => if no => delete this order
    res.send("deleted");
  } catch (error) {
    next(error);
  }
});

//this delete route decreases the amount of a product inside the cart
router.put("/decrease/:productId", async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    });
    let q = product.quantity;
    //should finish  with updating db after increase$ decrease

    const oneProduct = await orderDetail.findOne({
      where: {
        productId: req.params.productId,
      },
    });
    let newQuantity = oneProduct.quantity - 1;
    if (newQuantity >= 1) {
      await oneProduct.update({ quantity: newQuantity });
      q += 1;
      await Product.update(
        { quantity: q },
        {
          where: { id: req.params.productId },
        }
      );
    } else {
      await oneProduct.destroy();
      await Product.update(
        { quantity: q },
        {
          where: { id: req.params.productId },
        }
      );
    }
    res.send("deleted");
  } catch (error) {
    console.error(error);
  }
});

router.put("/increase/:productId", async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      },
    });

    const oneProduct = await orderDetail.findOne({
      where: {
        productId: req.params.productId,
      },
    });
    let q = product.quantity;
    let newQuantity = oneProduct.quantity + 1;
    if (newQuantity >= 1) {
      await oneProduct.update({ quantity: newQuantity });
      q -= 1;
      await Product.update(
        { quantity: q },
        {
          where: { id: req.params.productId },
        }
      );
    } else {
      await oneProduct.update({ quantity: newQuantity });
      await Product.update(
        { quantity: q },
        {
          where: { id: req.params.productId },
        }
      );
    }
    res.send("+1 item");
  } catch (error) {
    console.error(error);
  }
});

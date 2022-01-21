const router = require('express').Router()
const Product = require('../db/product');


const isAdminMiddleware = (req, res, next) => {
    if (!req.user.isAdmin) {
      const error = new Error('You are not an admin')
      error.status = 401
      next(error)
    } else {
      next()
    }
  }

//get all products
router.get('/',async(req,res,next)=>{
    try{
    const products =  await Product.findAll()
    res.send(products)
    }catch(error){
        next(error)
    }
})

//get single ptoduct
router.get('/:id',async(req,res,next)=>{
    try{
        const product = await Product.findByPk(req.params.id)
        res.json(product)
    }catch(error){
        next(error)
    }
})
//create single product - for admin only
router.post('/',isAdminMiddleware,async(req,res,next)=>{
    try{
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    }catch(error){
        next(error)
    }
})
//update product - for admin only
router.put("/:id",isAdminMiddleware,async(req,res,next)=>{
    try{
        const updateProduct = await Product.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        console.log('update product!',updateProduct)
        if(!updateProduct) res.sendStatus(404);
        res.sendStatus(200)
    }catch(error){
        next(error)
    }
})
//delete product - for admin only
router.delete("/:id",isAdminMiddleware,async(req,res,next)=>{
    try{
        const deleteProduct = await Product.destroy({
            where:{
                id:req.params.id,
            }
        });
        if(!deleteProduct) res.sendStatus(404)
        else res.sendStatus(204)
    }catch(error){
        next(error)
    }
})


module.exports = router
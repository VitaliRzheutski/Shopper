const router = require('express').Router()
const { route } = require('.');
const Product = require('../db/product');

router.get('/',async(req,res,next)=>{
    try{
    const products =  await Product.findAll()
    res.json(products)
    }catch(error){
        next(error)
    }
})

router.get('/:id',async(req,res,next)=>{
    try{
        const product = await Product.findByPk(req.params.id)
        res.json(product)
    }catch(error){
        next(error)
    }
})



module.exports = router
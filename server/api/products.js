const router = require('express').Router()
const { route } = require('.');
const Product = require('../db/product');

//get all products
router.get('/',async(req,res,next)=>{
    try{
    const products =  await Product.findAll()
    res.json(products)
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
//create single product
router.post('/',async(req,res,next)=>{
    try{
        console.log('req.body',req.body)
        const newProduct = await Product.create(req.body)
        // console.log('newProduct:',newProduct)
        res.json(newProduct)
    }catch(error){
        next(error)
    }
})



module.exports = router
const router = require('express').Router()
const Product = require('../db/product');

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
//create single product
router.post('/',async(req,res,next)=>{
    try{
        // console.log('req.body',req.body)
        const newProduct = await Product.create(req.body)
        // console.log('newProduct:',newProduct)
        res.json(newProduct)
    }catch(error){
        next(error)
    }
})
//update product
router.put("/:id",async(req,res,next)=>{
    try{
        const updateProduct = await Product.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        if(!updateProduct) res.sendStatus(404);
        res.sendStatus(200)
    }catch(error){
        next(error)
    }
})
//delete product
router.delete("/:id",async(req,res,next)=>{
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
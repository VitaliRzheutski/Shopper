const router = require('express').Router()
const User = require('../db/user');


router.get('/',async(req,res,next)=>{
    try{
        const users = await User.findAll();
        // console.log('users:',users)
        res.json(users)
    }catch(error){
        next(error)
    }
})
router.get('/:id',async(req,res,next)=>{
    try{
        const user = await User.findByPk(req.params.id)
        console.log('user:',user)
        res.json(user)
    }catch(error){
        next(error)
    }
})
module.exports = router

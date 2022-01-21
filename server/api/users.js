const router = require('express').Router()
const User = require('../db/user');

const isAdminMiddleware = (req, res, next) => {
    if (!req.user.isAdmin) {
      const error = new Error('You are not an admin')
      error.status = 401
      next(error)
    } else {
      next()
    }
  }

  //get all users
router.get('/',isAdminMiddleware,async(req,res,next)=>{
    try{
        const users = await User.findAll({
             attributes: ['id', 'firstName', 'lastName', 'email']
        });
        // console.log('users:',users)
        res.json(users)
    }catch(error){
        next(error)
    }
})
//get single users
router.get('/:id',isAdminMiddleware,async(req,res,next)=>{
    try{
        const user = await User.findByPk(req.params.id)
        // console.log('user:',user)
        res.json(user)
    }catch(error){
        next(error)
    }
})

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
    try {
      const userById = await User.findByPk(req.params.id)
      userById.destroy()
      res.status(204).end()
    } catch (error) {
      next(error)
    }
  })
  


module.exports = router

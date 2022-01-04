const router = require('express').Router()
const User = require('../db/user')
module.exports = router

const userNotFound = (next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  };
  
router.put("/login", async (req, res, next) => {
    console.log('PUT WORKED',req.body)
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });
      if (user) {
        req.session.userId = user.id
        console.log('req.session',req.session)

        res.json(user);

      } else {
        const err = new Error("Incorrect email or password!");
        err.status = 401;
        next(err);
      }
    } catch (err) {
      next(err);
    }
  });

  router.get("/me", async (req, res, next) => {
    try {
      if (!req.session.userId) {
        userNotFound(next);
      } else {
        const user = await User.findByPk(req.session.userId);
        user ? res.json(user) : userNotFound(next);
      }
    } catch (err) {
      next(err);
    }
  });

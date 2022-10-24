const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport')

router.get('/', async (req, res, next) => {
  // res.send('respond with a resource');
    try {
      const users = await User
        .find()
        .populate()
        return res.json(users);

    } catch (err) {
      return res.json([])
    }
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', async (err, user) => {
        if (err) return next(err);
        if (!user) {
            const err = new Error('Invalid credentials');
            err.statusCode = 400;
            err.errors = { email: 'Invalud credentials' };
            return next(err)
        }
        return res.json({ user });
    }) (req, res, next);
})

router.post('/register', async(req, res, next) => {
    const user = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.username }]
    });

    if (user) {
        const err = new Error("Validation Error");
        err.statusCode = 400;
        const errors = {};
        if (user.email === req.body.email) {
            errors.email = "A user has already registered using that email address"  
        }
        if (user.username === req.body.username) {
            errors.username = "That username is already in use"
        }
        err.errors = errors;
        return next(err);
    }
    const newUser = new User({
        username: req.body.username,
        email: req.body.email
    });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
        try {
            newUser.hashedPassword = hashedPassword;
            const user = await newUser.save();
            return res.json({ user });    
          }
          catch(err) {
              next(err);
          }
      })
    })
})

module.exports = router;
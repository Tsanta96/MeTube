const express = require("express");
const router = express.Router();
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ username: req.body.username })
      .then(user => {
        if (user) {
          // Use the validations to send the error
          errors.username = 'Username already exists';
          return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                })
            })
        }
    })
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
  
    User.findOne({username})
        .then(user => {
            if (!user) {
            // Use the validations to send the error
            errors.username = 'User not found';
            return res.status(404).json(errors);
            }
  
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {id: user.id, username: user.username};
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            // Tell the key to expire in one hour
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            }     
                        );
                    } else {
                        return res.status(400).json({password: 'Incorrect password'});
                    }
                })
        })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
    });
})

router.get('/profile/:user_id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.status(404).json({ noUser: 'No user found with that id' }))
});

router.get('/',(req, res) => {
    // console.log('---!!!!!!----I MADE IT----!!!!!!-----')
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(404).json({nousers: "No users found"}))
});

module.exports = router;
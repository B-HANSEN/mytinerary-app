const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');


// ******************** HTTP: GET ********************
// fetch all users from db: go into model, find --> res.json
router.get('/', (req,res) => {
  User.find()
  .then(users => res.json(users))
});

// ******************** HTTP: POST ********************
// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user, from mongoose
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({ name, email, password });

      // Create salt & hash (salt: create a hash from a plain text password)
      // default is 10, number of rounds to use (the higher, the more secure but longer processing)
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              // sign the token with first parameter 'payload' and second parameter secret, expiration optional (e.g. 1hr = 3600 sec)
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                // then callback:
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      _id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                }
              )
            });
        })
      })
    })
});

// @route   POST api/users (for Google)
// @desc    Register new user
// @access  Public
router.post('/social', (req, res) => {
  console.log("login to google");
  
    const { name, email } = req.body;

    // Simple validation
    if(!name || !email) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user, from mongoose
    User.findOne({ email })
      .then(user => {
        if(user) return (
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          )
        )

        const newUser = new User({ name, email });

        newUser.save()
            .then(user => {
                jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      _id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                }
              )
            });
      });
});


// @route   DELETE api/users
// @desc    Delete user
// @access  Public
  // router.put('/users/:id', function(req,res,next){
  //   User.findByIdAndRemove({ _id: req.params.id })
  //     .then(function(user) {
  //       res.send(user);
  //     });  
  // });


module.exports = router
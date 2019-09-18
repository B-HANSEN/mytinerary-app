const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// import multer and initialise it (define a folder for multer to store incoming files):
const multer = require('multer');

const storage = multer.diskStorage({ 
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') { 
    // reject a file
    cb(null, true);
  } else {
    // accept and store the file
    cb(null, false);
  }
};

// maximise filesize to <5mb
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
});

// define user constant based on model's schema
const User = require('../../models/User');


// ******************** HTTP: GET ********************
// fetch all users from db: go into model, find --> res.json
router.get('/', (req,res) => {
  User.find()
  .select("-password")
  .exec()
  .then(users => res.json(users))
});

// ******************** HTTP: POST ********************
// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', upload.single('avatar'), (req, res) => {
    const { name, email, password } = req.body;
     
        // Completeness validation:
                if(!name || !email || !password) {
                  return res.status(400).json({ msg: 'Please enter all fields' });
                }

        // Check for existing user, from mongoose
    User.findOne({ email })
      .then(user => {

        // Existing validation:
                if(user) return res.status(400).json({ msg: 'User already exists' });

        // storing new information:
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            avatar: req.file.path
        });

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
                        email: user.email,
                        favorites: [],
                        avatar: user.avatar
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
    .select('-password')
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
                user
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
                      email: user.email,
                      favorites:[]
                    }
                  });
                }
              )
            });
      });
});

module.exports = router
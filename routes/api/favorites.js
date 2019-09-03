const express = require ('express');
const router = express.Router();

// User Model
const User = require('../../models/User');


// @route   POST api/favorites for 1 user (by id)
// @desc    Add favs
// @access  Public
router.put('/users/:id', function(req, res){
    User.updateOne({ _id: req.params.id }, { $push: { favorites: [req.body.itinId] }})
      .then(function() {
       res.send({ msg: "push done" })
      });
  });


// @route   DELETE api/favorites 1 favorite (by favId) for 1 user (by id)
// @desc    Delete favs
// @access  Public
router.delete('/users/:id/:favId', function(req, res) {
    User.updateOne(
        { _id: req.params.id },
        { $pull: { favorites: req.params.favId }}
        )
      .then(function() {
       res.send({ msg: "delete done" })
      });
  });


// ******************** HTTP: GET ********************
// @route   GET api/favorites 1 favorite (by favId) for 1 user (by id)
// @desc    Delete favs
// @access  Public
router.get('/users/:id/', (req,res) => {
    User.findById(req.params.id)
        .then(users => User.find(users.favorites)
        .then(itineraries => res.json(itineraries),
        res.send({ msg: "favs retrieved" }))
        
        )
});

module.exports = router;
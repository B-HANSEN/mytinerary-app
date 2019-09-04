const express = require ('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const Itinerary = require("../../models/Itinerary")

// @route   POST api/favorites for 1 user (by id)
// @desc    Add favs
// @access  Public
router.put('/users/:id', function(req, res){
    User.updateOne({ _id: req.params.id }, { $push: { favorites: [req.body.itinId] }})
      .then(function() {
       res.send({ msg:"push done" })
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
       res.send({ msg:"delete done" })
      });
  });


// ******************** HTTP: GET ********************
// @route   GET api/favorites 1 favorite (by favId) for 1 user (by id)
// @desc    Delete favs
// @access  Public
router.get('/users/:id', (req,res) => {
    User.findById(req.params.id)
        .then(user => {
            Itinerary.find(
                { _id: { $in: user.favorites } }
                )
            .then(itineraries => res.json(itineraries))
        });
});
 
module.exports = router;
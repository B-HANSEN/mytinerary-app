const express = require ('express');
const router = express.Router();

// User Model
const User = require('../../models/User');


// @route   POST api/users
// @desc    Update user
// @access  Public
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function() {
        db.users.update(
          { id: user._id },
          { $push: { favorites: [itinId]}
          }
        )
      });
  });
  
  module.exports = router;
  
 
 
 
  // $push  -update    favorites will be an array  fav: [];
  // $pull  -delete    $pull operator removes from existing array all instances of values that match a specified condition     
  //                   $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }
  // $in    -get
  
  // db.students.update(
  //   { name: "joe" },
  //   { $push: { scores: { $each: [ 90, 92, 85 ] } } }
  // )
  
  // db.stores.update(
  //   { },
  //   { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } },
  //   { multi: true }
  // )
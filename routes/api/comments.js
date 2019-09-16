const express = require ('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const Comment = require("../../models/Comment")

//   newItem.save().then(item => res.json(item));

// ******************** HTTP: GET ********************
// @route   GET api/comments for 1 itinerary and 1 user
// @desc    Get comments
// @access  Public
router.get('/users/:id', (req,res) => {
    User.findById(req.params.id)
        .then(user => {
            Comment.find(
                { _id: { $in: user.comments } }
                )
            .then(comments => res.json(comments))
        });
});
 
module.exports = router;
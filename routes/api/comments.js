const express = require ('express');
const router = express.Router();

// User Model
const Comment = require("../../models/Comment")

// ******************** HTTP: GET ********************
// @route   GET api/comments
// @desc    Get comments
// @access  Public
router.get('/', (req,res) => {
    Comment.find()
    .then(comments => res.json(comments))
});


// @route   GET api/comments/singleItinId
// @desc    Get comments for one itinerary
// @access  Public
router.get('/:singleItinId', (req,res) => {
    Comment.find({ itinId: req.params.singleItinId })
    .then(comments => res.json(comments))
});


// ******************** HTTP: POST ********************
router.post('/', (req,res) => {
       
    const newComment = new Comment ({
        itinId: req.body.itinId,
        text: req.body.text,
        user: req.body.user
    })
    newComment.save().then(comment => res.json(comment));
});


module.exports = router;
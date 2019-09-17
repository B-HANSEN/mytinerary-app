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

module.exports = router;
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create schema
const CommentSchema = new Schema ({
    itinId: {
        type: String
    },
    userId: {
        type: String
    },
    text: {
        type: String
    }
})

module.exports = Comment = mongoose.model('comment', CommentSchema);
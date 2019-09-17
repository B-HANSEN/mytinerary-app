const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create schema
const CommentSchema = new Schema ({
    itinId: {
        type: String
    },
    user: {
       username:{
        type: String
       },
       profilePic:{
        type: String
       }
    },
    text: {
        type: String
    }
})

module.exports = Comment = mongoose.model('comment', CommentSchema);
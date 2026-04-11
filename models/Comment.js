import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  itinId: { type: String },
  user: {
    username: { type: String },
    profilePic: { type: String },
  },
  text: { type: String },
});

const Comment = mongoose.model('comment', CommentSchema);
export default Comment;

import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  actPlace: { type: String },
  actPic: { type: String },
  itinId: { type: String },
});

const Activity = mongoose.model('activity', ActivitySchema);
export default Activity;

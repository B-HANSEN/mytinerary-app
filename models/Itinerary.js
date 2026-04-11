import mongoose from 'mongoose';

const ItinerarySchema = new mongoose.Schema({
  title: { type: String },
  username: { type: String },
  profilePic: { type: String },
  rating: { type: Number },
  duration: { type: Number },
  price: { type: String },
  hashtag: { type: Array },
  cityId: { type: String },
});

const Itinerary = mongoose.model('itinerary', ItinerarySchema);
export default Itinerary;

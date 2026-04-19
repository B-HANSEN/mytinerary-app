import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  img: { type: String, default: '' },
});

const City = mongoose.model('city', CitySchema);
export default City;

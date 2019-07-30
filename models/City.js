const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create schema
const CitySchema = new Schema ({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

// to access the data: creating a model; the name of the model is "city"; model should know what the schema is
module.exports = City = mongoose.model('city', CitySchema);

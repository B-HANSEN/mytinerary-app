const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItinerarySchema = new Schema ({
    title: {
        type: String
    },
    // itinPic: {
    //     type: String
    // },
    username: {
        type: String
    },
    profilePic: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number  
    },
    price: {
        type: String  
    },
    hashtag: {
        type: Array  
    },
    cityId: {
        type: String
    }
})

// to access the data: creating a model; the name of the model is "city"; model should know what the schema is
module.exports = Itinerary = mongoose.model('itinerary', ItinerarySchema);
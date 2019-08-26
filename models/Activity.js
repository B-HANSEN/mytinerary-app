const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create schema
const ActivitySchema = new Schema ({
    actPlace: {
        type: String
    },
    actAddress: {
        type: String
    },
    actPic: {
        type: String
    },
    actTime: {
        type: String
    },
    actPrice: {
        type: String
    },
    itinId: {
        type: String
    }
})

// to access the data: creating a model; the name of the model is "activity "; model should know what the schema is
module.exports = Activity = mongoose.model('activity', ActivitySchema);
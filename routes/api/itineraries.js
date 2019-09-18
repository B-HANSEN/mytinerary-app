const express = require('express');
const router = express.Router();

// import multer and initialise it (define a folder for ulter to store incoming files):
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// import itinerary model
const Itinerary = require ('../../models/Itinerary');


// ******************** HTTP: GET ********************
// fetch itineraries only for selected city
router.get('/:singleCityId', (req,res) => {
    console.log(req.params.singleCityId)
    Itinerary.find({cityId: req.params.singleCityId})
    .then(itineraries => {
        console.log(itineraries)
        res.json(itineraries)
    })
});

// ******************** HTTP: PUT ********************
// @route   PUT api/itineraries
// @desc    increase/ decrease count of likes
// @access  Public
router.put('/:itinId/rating', function(req, res) {
    Itinerary.updateOne(
        { _id: req.params.itinId },
        { $inc: { rating: req.body.amount }}
        )
      .then(function(iti) {
       res.send({ msg:"changed by 1 count", itinerary :  iti })
      });
});


// ******************** HTTP: POST ********************
// upload only one file with upload.single()-method
router.post('/', 
// upload.single('avatar'), 
(req,res) => {
    console.log(req.file)
    
    const newItinerary = new Itinerary ({
    title: req.body.title,
    profilePic: req.body.profilePic,
    username: req.body.username,
    rating: req.body.rating,
    duration: req.body.duration,
    price: req.body.price,
    hashtag: req.body.hashtag,
    cityId: req.body.cityId
})
    newItinerary.save()
    .then(itinerary => res.json(itinerary));
});

// ******************** HTTP: DELETE ********************
router.delete('/:id', (req,res) => {
   Itinerary.findById(req.params.id)
   .then(itinerary => itinerary.remove()
     .then( () => res.json({ success: true })))
     .catch(err => res.status(404).json({ success: false }))
 })
 
// to export router, not in ES6!
module.exports =  router
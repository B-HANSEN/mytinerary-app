const express = require ('express');
const router = express.Router();

// import itinerary model
const Itinerary = require ('../../models/Itinerary');

// ******************** HTTP: GET ********************
// fetch all items from db: go into model, find --> res.json
router.get('/', (req,res) => {
    Itinerary.find()
    .then(itineraries => res.json(itineraries))
});
    
// fetch itineraries only for selected city
router.get('/:singleCityId', (req,res) => {
    console.log(req.params.singleCityId)
    Itinerary.find({cityId: req.params.singleCityId})
    .then(itineraries => {
        console.log(itineraries)
        res.json(itineraries)
    })
});

// ******************** HTTP: POST ********************
router.post('/', (req,res) => {
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
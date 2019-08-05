const express = require ('express');
const router = express.Router();

// import itinerary model
const Itinerary = require ('../../models/Itinerary');


// ******************** HTTP: GET ********************
// fetch all items from db: go into model, find and sort by date descending, jsonAPI --> res.json
router.get('/', (req,res) => {
    Itinerary.find()
    // .sort({ date: -1 })
    .then(itineraries => res.json(itineraries))
});

// ******************** HTTP: POST ********************
router.post('/', (req,res) => {
   const newItinerary = new Itinerary ({
    name: req.body.name
   })
    newItinerary.save().then(itinerary => res.json(itinerary));
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
const express = require ('express');
const router = express.Router();

// import city model
const City = require ('../../models/City');

// ******************** HTTP: GET ********************
// @route   GET api/cities
// '/' represents end point api/cities
// fetch all items from db: go into model, find --> res.json
router.get('/', (req,res) => {
    City.find()
    .then(cities => res.json(cities))
});

// ******************** HTTP: POST ********************
// @route   POST api/cities
router.post('/', (req,res) => {
   const newCity = new City ({
    name: req.body.name
   })
    newCity.save()
    .then(city => res.json(city));
});

// ******************** HTTP: DELETE ********************
// @route   DELETE api/cities/:id
router.delete('/:id', (req,res) => {
   City.findById(req.params.id)
   .then(city => city.remove()
     .then( () => res.json({ success: true })))
     .catch(err => res.status(404).json({ success: false }))
 })

// for MYtinerary page title picture
 router.get('/:id', (req,res) => {
    City.findById(req.params.id)
    .then(city => res.json(city))
  })
 
// to export router, not in ES6!
module.exports =  router
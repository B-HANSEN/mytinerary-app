const express = require ('express');
const router = express.Router();

// import itinerary model
const Activity = require ('../../models/Activity');


// ******************** HTTP: GET ********************
// fetch all items from db: go into model, find and sort by date descending, jsonAPI --> res.json
router.get('/', (req,res) => {
    Activity.find()
    .then(activities => res.json(activities))
});

// ******************** HTTP: GET ********************
// fetch activties only for selected city
router.get('/:singleCityId', (req,res) => {
    Activity.find({cityId: req.params.singleCityId})
    .then(activities => res.json(activities))
});

// ******************** HTTP: POST ********************
router.post('/', (req,res) => {
   const newActivity = new Activity ({
    actPic: req.body.actPic,
    actTitle: req.body.actTitle
})
    newActivity.save().then(activity => res.json(activity));
});

// ******************** HTTP: DELETE ********************
router.delete('/:id', (req,res) => {
   Activity.findById(req.params.id)
   .then(activity => activity.remove()
     .then( () => res.json({ success: true })))
     .catch(err => res.status(404).json({ success: false }))
 })

// for MYtinerary page activity pictures   ---  review model!!!
router.get('/:id', (req,res) => {
    City.findById(req.params.id)
    .then(city => res.json(city))
  })
 
// to export router, not in ES6!
module.exports =  router
const express = require ('express');
const router = express.Router();

// import itinerary model
const Activity = require ('../../models/Activity');


// ******************** HTTP: GET ********************
// fetch all items from db: go into model, find, jsonAPI --> res.json
router.get('/', (req,res) => {
    Activity.find()
    .then(activities => res.json(activities))
});

// ******************** HTTP: GET ********************
// fetch activities only for selected itinerary
router.get('/:singleItinId', (req,res) => {
    Activity.find({itinId: req.params.singleItinId})
    .then(activities => res.json(activities))
});

// ******************** HTTP: POST ********************
router.post('/', (req,res) => {
   const newActivity = new Activity ({
    actPic: req.body.actPic,
    actPlace: req.body.actPlace,
    itinId: req.body.itinId
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
 
// to export router, not in ES6!
module.exports =  router
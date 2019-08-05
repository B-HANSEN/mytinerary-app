// BASE SETUP
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const app = express();

// Bodyparser Middleware
app.use(express.json());

// to make the server know to look for this route; import it from routes
const cities = require ('./routes/api/cities')
const itineraries = require ('./routes/api/itineraries')

  // body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("connection done"))
.catch(err => console.log(err)); 

// use routes; anything that goes to api/cities should refer to the above variable which is the file
app.use('/api/cities', cities)
app.use('/api/itineraries', itineraries)

// send back a dynamic string with the parameters of a specific itinerary
app.get('/api/itineraries/:id', function(req, res) {
  res.send('You requested to see the itinerary with ID + req.params.id' )
})

const port = process.env.PORT || 5000;

// START THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`));
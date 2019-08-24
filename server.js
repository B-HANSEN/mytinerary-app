// BASE SETUP
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const app = express();

// to make the server know to look for this route; import it from routes
const cities = require ('./routes/api/cities')
const itineraries = require ('./routes/api/itineraries')
const activities = require ('./routes/api/activities')

// body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("connection done"))
.catch(err => console.log(err)); 

// use routes
app.use('/api/cities', cities)
app.use('/api/itineraries', itineraries)
app.use('/api/activities', activities)

const port = process.env.PORT || 5000;

// START THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`));
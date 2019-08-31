// require("dotenv").config();
const config = require('config');


// BASE SETUP
const express = require('express');
// const bodyParser = require('body-parser');  // latest version of express includes the body-parser
const mongoose = require('mongoose'); 
const app = express();


// core Node.js module for building purpose
const path = require('path');

// to make the server know to look for this route; import it from routes
// const cities = require ('./routes/api/cities')
// const itineraries = require ('./routes/api/itineraries')
// const activities = require ('./routes/api/activities')
// const users = require ('./routes/api/users')

// body parser middle ware
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// DB config
// const db = require('./config/keys').mongoURI;
// const db = process.env.DATABASE // replace with config.get 
const db = config.get('mongoURI');

// connect to Mongo
mongoose.connect(db, {useNewUrlParser: true,
useCreateIndex: true
})
.then(() => console.log("connection done"))
.catch(err => console.log(err)); 

// use routes
// app.use('/api/cities', cities)
// app.use('/api/itineraries', itineraries)
// app.use('/api/activities', activities)
// app.use('/api/users', users)
// app.use('api/auth', auth)

app.use('/api/cities', require('./routes/api/cities'));
app.use('/api/itineraries', require('./routes/api/itineraries'));
app.use('/api/activities', require('./routes/api/activities'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));



// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const port = process.env.PORT || 5000;

// START THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`));
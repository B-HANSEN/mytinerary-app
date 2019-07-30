// BASE SETUP
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/test', (req, res) => {
  res.send({ express: 'HELLO WORLD mmwwwwwlafgdajgilshguidydugyfilgdfs;gku' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent to meeee me: ${req.body.post}`,
  );
});

// START THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`));
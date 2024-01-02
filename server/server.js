const express = require('express');
const app = express();
let calcHist = require('./data/calculations-data');
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));


// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', function(req, res) {
  res.send(calcHist);
});

// POST /calculations
app.post('/calculations', (req, res) => {
  const newCalc = req.body;
  console.log('Get a POST request', newCalc);
});

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;

// Require modules
const express = require('express');
// Create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes
app.get('/', (req, res) => {
  res.send(
    `<h1>99 bottles of beer on the wall</h1><a href='/98'>take one down, pass it around</a>`
  );
});

app.get('/:number_of_bottles', (req, res) => {
  console.log(req.params);
  const { number_of_bottles } = req.params;
  if (number_of_bottles === '0') {
    res.send('<a href="/98">No more bottles, start over!</a>');
  } else if (number_of_bottles < 0 || number_of_bottles > 99) {
    res.send('<a href="/98">No negative numbers or >99 allowed</a>');
  }
  res.send(
    `<h1>Number of bottles left:${number_of_bottles}</h1><a href='/${
      number_of_bottles - 1
    }'>take one down, pass it around</a>`
  );
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

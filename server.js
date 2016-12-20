const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 7777;
const app = express();

mongoose.connect('mongodb://localhost:27017/appDB');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, './')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  })
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
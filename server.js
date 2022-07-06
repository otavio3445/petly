const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const fallback = require('express-history-api-fallback');

require('dotenv').config({path: process.env.NODE_ENV !== "production" ? ".env.local" : ".env"});

let app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const root = path.join(__dirname, './build');
// serve static files built by react
app.use(express.static(root));


// Serve react main aplication
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

// const routes = require('./routes');

app.use(fallback('index.html', { root }));

app.use((req, res, next) => {
  console.log('404 - Error handler: ' + req.headers.host + req.url);
  res.status(404).send({
    message: 'Resource not found',
    type: 'internal'
  });
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log('err');
  }
  console.log('==> Listening on port '+port+'. Open up https://0.0.0.0:'+port+'/ in your browser.');
});

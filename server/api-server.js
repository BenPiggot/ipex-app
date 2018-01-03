const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'x-access-token, Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
  } else {
    next();
  }
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/api/products/', (req, res) => {
  const payload1 = require('./payload1.json')

  if (req.body.filters.length < 1) {
    res.send(payload1)
  }
  else if (req.body.filters.length === 1) {
    console.log(payload1.slice(0,9))
    res.send(payload1.slice(0, 9))
  }
  else if (req.body.filters.length === 2) {
    res.send(payload1.slice(0,7))
  }
  else if (req.body.filters.length === 3 ) {
    res.send(payload1.slice(0, 6))
  }
  else if (req.body.filters.length === 4) {
    res.send(payload1.slice(0, 4))
  }
  else if (req.body.filters.length >= 5) {
    res.send(payload1.slice(0, 2))
  }
})

app.listen(8081)
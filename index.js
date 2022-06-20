const express = require('express');
require('dotenv').config();
const app = express();
// const path = require('path');

app.use(express.json());
app.use(express.static(__dirname, + './client/dist'))

app.listen(process.env.PORT, () => {
  console.log(`listening on port:${process.env.PORT}` )
})
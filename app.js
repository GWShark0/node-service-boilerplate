require('dotenv').config();

const express = require('express');
const app = express();

const index = require('./routes/index');

const { PORT } = process.env;

app.use(index);

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});

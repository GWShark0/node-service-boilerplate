const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.get('/status', (req, res, next) => {
  res.json({ status: 'OK' });
});

module.exports = router;

'use strict';

let router = require('express').Router();

router.get('/', (request, response, next) => {
  response.send('PONG');
})
router.get('/requirements', require('./requirements'));

module.exports = router;
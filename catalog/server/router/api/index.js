'use strict';

let router = require('express').Router();

router.get('/', (request, response, next) => {
  response.send('PONG');
});
router.use('/requirements', require('./requirements'));
router.use('/theories', require('./theories'));
router.use('/progproblems', require('./progproblems'));
router.use('/features', require('./features'));

module.exports = router;
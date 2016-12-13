'use strict';

let router                 = require('express').Router();
let TheoryController  = require('../../controller/TheoryController');


router.get('/', TheoryController.getTheories);
router.get('/:_id', TheoryController.byId);
router.get('/ets/:et_ids', TheoryController.getTheoriesbyIds)
router.post('/', TheoryController.create);
router.put('/:_id', TheoryController.update);
router.delete('/:_id', TheoryController.remove);

module.exports = router;
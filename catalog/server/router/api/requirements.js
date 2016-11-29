'use strict';

let router                 = require('express').Router();
let RequirementController  = require('../../controller/RequirementController');


router.get('/', RequirementController.list);
router.get('/:_id', RequirementController.byId);
router.post('/', RequirementController.create);
router.put('/:_id', RequirementController.update);
router.delete('/:_id', RequirementController.remove);

module.exports = router;
'use strict';

let router                 = require('express').Router();
let RequirementController  = require('../../controllers/RequirementController');


router.get('/', RequirementController.getRequirements);
router.get('/:_id', RequirementController.byId);
router.post('/', RequirementController.create);
router.put('/:_id', RequirementController.update);
router.delete('/:_id', RequirementController.remove);

module.exports = router;
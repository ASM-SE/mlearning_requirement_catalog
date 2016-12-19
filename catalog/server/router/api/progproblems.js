'use strict';

let router                 = require('express').Router();
let ProgProblemController  = require('../../controller/ProgProblemController');


router.get('/', ProgProblemController.getProgProblems);
router.get('/:_id', ProgProblemController.byId);
router.get('/ppr/:pg_ids', ProgProblemController.getProgProblemsbyIds)
router.post('/', ProgProblemController.create);
router.put('/:_id', ProgProblemController.update);
router.delete('/:_id', ProgProblemController.remove);

module.exports = router;
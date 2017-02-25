'use strict';

let router                 = require('express').Router();
let FeatureController  = require('../../controllers/FeatureController');


router.get('/', FeatureController.getFeatures);


module.exports = router;
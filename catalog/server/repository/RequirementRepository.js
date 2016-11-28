'use strict';

let mongoose            = require('../db');
let schema              = require('../schema/RequirementSchema');

let RequirementRepository  = mongoose.model('requirement', schema);

module.exports = RequirementRepository;
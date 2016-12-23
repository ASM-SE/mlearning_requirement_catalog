'use strict';

let mongoose            = require('../configs/MongooseConfig');
let schema              = require('../schemas/RequirementSchema');

let RequirementRepository  = mongoose.model('requirements', schema);       //Collection Requirements (English)

module.exports = RequirementRepository;
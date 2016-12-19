'use strict';

let mongoose            = require('../config/MongooseConfig');
let schema              = require('../schema/RequirementSchema');

let RequirementRepository  = mongoose.model('requirements', schema);       //Collection Requirements (English)

module.exports = RequirementRepository;
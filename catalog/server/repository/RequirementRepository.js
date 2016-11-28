'use strict';

let mongoose            = require('../config/MongooseConfig');
let schema              = require('../schema/RequirementSchema');

let RequirementRepository  = mongoose.model('requirement', schema);

module.exports = RequirementRepository;
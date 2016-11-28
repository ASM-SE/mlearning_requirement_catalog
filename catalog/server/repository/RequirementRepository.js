'use strict';

let mongoose            = require('../config/MongooseConfig');
    schema              = require('../schema/RequirementSchema');

let RequirementRepository  = mongoose.model('Requirement', schema);

module.exports = Requirementpository;
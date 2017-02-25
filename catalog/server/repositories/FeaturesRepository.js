'use strict';

let mongoose            = require('../configs/MongooseConfig');
let schema              = require('../schemas/FeaturesSchema');

let RequirementRepository  = mongoose.model('features', schema);       //Collection Features (English)

module.exports = FeaturesRepository;
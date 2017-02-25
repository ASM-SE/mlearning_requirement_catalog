'use strict';

let mongoose            = require('../configs/MongooseConfig');
let schema              = require('../schemas/FeatureSchema');

let FeatureRepository  = mongoose.model('features', schema);       //Collection Features (English)

module.exports = FeatureRepository;
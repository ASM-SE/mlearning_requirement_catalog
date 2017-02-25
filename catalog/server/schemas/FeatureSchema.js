'use strict';

let mongoose            = require('../configs/MongooseConfig');

let FeatureSchema 	= mongoose.Schema({

    constraint: {type: String, required: true},
    name: {type: String, required: true},
    level: {type: String, required: true},
    father_node: {type: String, required: true}

});

module.exports = FeatureSchema;
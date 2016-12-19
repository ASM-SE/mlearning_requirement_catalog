'use strict';

let mongoose                = require('../config/MongooseConfig');
let schema                  = require('../schema/ProgProblemSchema');

let ProgProblemRepository   = mongoose.model('progproblems', schema);       //Collection Program Problems (English)

module.exports = ProgProblemRepository;




'use strict';

let mongoose                = require('../configs/MongooseConfig');
let schema                  = require('../schemas/ProgProblemSchema');

let ProgProblemRepository   = mongoose.model('progproblems', schema);       //Collection Program Problems (English)

module.exports = ProgProblemRepository;




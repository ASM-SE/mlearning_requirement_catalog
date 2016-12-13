'use strict';


let mongoose            = require('../config/MongooseConfig');
let schema              = require('../schema/TheorySchema');

let TheoryRepository  = mongoose.model('theories', schema);

module.exports = TheoryRepository;
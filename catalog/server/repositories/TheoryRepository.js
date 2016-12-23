'use strict';


let mongoose            = require('../configs/MongooseConfig');
let schema              = require('../schemas/TheorySchema');

let TheoryRepository  = mongoose.model('theories', schema);       //Collection Educational Theories (English)

module.exports = TheoryRepository;
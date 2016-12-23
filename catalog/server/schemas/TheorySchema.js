'use strict';

let mongoose            = require('../configs/MongooseConfig');

let TheorySchema        = mongoose.Schema({
    et_id: {type: String, trim: true, required: true, maxlength: 5},
    et_type:{type: Array, trim: true},
    et_name:{type: Array, trim: true},
    et_acronym:{type: Array, trim: true},
    et_description:{type: Array, trim: true},
    et_theoretician:{type: Array, trim: true},
    et_year:{type: Array, trim: true},
    et_realtionship:{type: Array, trim: true},
    et_bibliography:{type: Array, trim: true}

});

module.exports = TheorySchema;
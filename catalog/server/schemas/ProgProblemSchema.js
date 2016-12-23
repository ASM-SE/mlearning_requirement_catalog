'use strict';

let mongoose            = require('../configs/MongooseConfig');

let ProgProblemSchema 	= mongoose.Schema({

    pg_id: {type: String, trim: true, required: true, maxlength: 7},
    pg_category: {type: String, required: true},
    pg_description: {type: String, required: true}

});

module.exports = ProgProblemSchema;
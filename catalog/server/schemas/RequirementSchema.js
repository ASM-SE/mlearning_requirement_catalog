'use strict';

let mongoose            = require('../configs/MongooseConfig');

let RequirementSchema 	= mongoose.Schema({
	rq_stid: {type: String, trim: true, required: true, maxlength:4},	
	rq_id: {type: String, trim: true, required: true, maxlength:3},	
	rq_prog_prob: {type: Array, trim: true},
	rq_modality: {type: String, required: true},
	rq_ml_type: {type: String, required: true},
	rq_ml_modification: { type: String, required: true},
	rq_type_cat: {type: String, required: true},
	rq_theories: {type: Array, trim: true},
	rq_subcategory: {type: String, required: true},
	rq_requirement: {type: String, required: true},
	rq_description: {type: String, required: true},
	rq_cross_reference: {type: String, required: true},
	rq_bibliography: {type: String, required: true},
	rq_variability: {type: String, required: true}
  });


module.exports = RequirementSchema;
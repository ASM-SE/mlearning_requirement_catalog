'use strict';

let bluebird    = require('bluebird');   //??
let debug       = require('debug')('catalog:controller:feature'); //??
let repository  = require('../repositories/FeatureRepository');
const PER_PAGE  = 10;

let FeatureController = {

 getFeatures: (request, response, next) =>{
    // let query = {rq_id::/^RNF/}; //Contenha RNF
    //let query = {rq_id: /^((?!RNF).)/};  //Não contenha RNF
  let query = {};
  let fields = {};
  repository.find(query, fields)
    .then((result) =>{
      if (!result) {
        let err = new Error('Features not found.');
        err.status = 500;
        throw err;
      }
      return result;
    })
    .then(function(result) {
      response.json(result);
    })
    .catch(next);
  }

}

module.exports = FeatureController;
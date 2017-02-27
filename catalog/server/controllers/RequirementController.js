'use strict';

let bluebird    = require('bluebird');   //??
let debug       = require('debug')('catalog:controller:requirement'); //??
let repository  = require('../repositories/RequirementRepository');
const PER_PAGE  = 10;

let RequirementController = {

 getRequirements: (request, response, next) =>{
    // let query = {rq_id::/^RNF/}; //Contenha RNF
    //let query = {rq_id: /^((?!RNF).)/};  //Não contenha RNF
  let query = {};
  let fields = {};
  repository.find(query, fields)
    .then((result) =>{
      if (!result) {
        let err = new Error('Requirements not found.');
        err.status = 500;
        throw err;
      }
      return result;
    })
    .then(function(result) {
      response.json(result);
    })
    .catch(next);
  },



 getRequirementsAgre: (request, response, next) =>{
    // let query = {rq_id::/^RNF/}; //Contenha RNF
    //let query = {rq_id: /^((?!RNF).)/};  //Não contenha RNF
  let query = {};
  let fields = {};
  repository.aggregate([	{$sort:{"rq_stid":1,"rq_id":1}}])
    .then((result) =>{
      if (!result) {
        let err = new Error('Requirements not found.');
        err.status = 500;
        throw err;
      }
      return result;
    })
    .then(function(result) {
      response.json(result);
    })
    .catch(next);
  },






  byId: (request, response, next) =>{
    let _id = request.params._id;
    repository.findOne({ _id: _id })
    .then((result) =>{
      if (!result) {
        let err = new Error('Requirement not found.');
        err.status = 404;
        throw err;
      }
      return result;
    })
    .then(function(result) {
      response.json(result);
    })
    .catch(next);
  },





  list: (request, response, next) => {
    let query = {};
    let page = parseInt(request.query.page || 1, 10);

    if (request.query.q) {
      let search = new RegExp(request.query.q, 'i');
      query = {
        $or: [
          { rq_id: search },
          { rq_requirement: search },
          { rq_description: search }
        ]
      };
    }
   debug('query', query);

    bluebird.all([
      repository.find(query).limit(PER_PAGE).skip(PER_PAGE * (page - 1)).sort({ _id: - 1 }),
      repository.count(query)
    ])
    .then(function(results) {
      let result = results[0];
      let count = results[1];
      let data = {
        items: result,
        _metadata: {
          size: (result || []).length,
          total: count,
          perPage: PER_PAGE,
          page: page
        }
      };

      response.json(data);
    })
    .catch(next);
  },


  create: (request, response, next) => {
    let requirement = new repository(request.body);
    customer.save()
      .then(function(result) {
        response.status(201).json(result);
      })
      .catch(function(err) {
        err.status = 422;
        next(err);
      });
  },

  update: (request, response, next) => {
    let _id = request.params._id;
    repository.update({ _id: _id }, { $set: request.body })
    .then(function(result) {
      response.json(result);
    })
    .catch(next);
  },

  remove: (request, response, next) => {
    let _id = request.params._id;
    repository.remove({ _id: _id })
    .then(function(err, result) {
      response.sendStatus(204);
    })
    .catch(next);
  }
};

module.exports = RequirementController;
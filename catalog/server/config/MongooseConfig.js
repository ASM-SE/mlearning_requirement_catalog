'use strict';

let mongoose  = require('mongoose');
let debug     = require('debug')('catalog:config:mongoose');
let env    = require('../env');

mongoose.Promise = require('bluebird');
mongoose.connect(env.database.uri, env.database.credentials);


mongoose.set('debug', true);

const db = mongoose.connection;
/* istanbul ignore next */
db.on('error', function(err) {
  debug(err);
});

db.on('open', () => {
	console.log(`Connected with: ${env.database.uri}`);
});

db.once('open', function (callback) {
  debug('Connected to mongodb');
});

module.exports = mongoose;


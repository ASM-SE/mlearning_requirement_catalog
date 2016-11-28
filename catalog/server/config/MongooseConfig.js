'use strict';

let mongoose  = require('mongoose');
let debug     = require('debug')('catalog:config:mongoose');
let env    = require('../env');

function _connection(vars) {
  let username  = vars.MONGO_USERNAME || env.database.credentials.user,
      password  = vars.MONGO_PASSWORD || env.database.credentials.pass,
      host      = vars.MONGO_HOST     || 'localhost',
      port      = vars.MONGO_PORT     || '27017',
      database  = vars.MONGO_DATABASE || env.database.uri,


      auth = username ? /* istanbul ignore next */ username + ':' + password + '@' : '';
  return 'mongodb://' + host + ':' + port + '/' + database, username, password;
}


mongoose.Promise = require('bluebird');
mongoose.connect(_connection(env));
mongoose.set('debug', true);

let db = mongoose.connection;
/* istanbul ignore next */
db.on('error', function(err) {
  debug(err);
});

db.once('open', function (callback) {
  debug('Connected to mongodb');
});

module.exports = mongoose;


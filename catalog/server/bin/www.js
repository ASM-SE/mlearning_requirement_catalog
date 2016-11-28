'use strict';

let debug = require('debug')('requirement:controller:connection'),
const app = require('../app');
const env = require('../env');


/* app.listen(env.server.port, () => {
  console.log(`Listen on port ${env.server.port}`);
}); */

 debug(`Listen on port ${env.server.port}`);

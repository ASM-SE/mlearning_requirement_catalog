'use strict';

const app = require('../app');
const env = require('../configs/env');


app.listen(env.server.port, () => {
  console.log(`Listen on port ${env.server.port}`);
}); 


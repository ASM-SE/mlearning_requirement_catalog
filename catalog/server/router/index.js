'use strict';


//Centraliza o acesso as rotas da pasta /router/api
let router = require('express').Router();

router.use('/api', require('./api'));

module.exports = router;
'use strict';

//Importando as dependências para o projeto
const express 		= require('express');
const path 			= require('path');
const logger 		= require('morgan');				//??
const cookieParser 	= require('cookie-parser');
const bodyParser 	= require('body-parser');
const compression 	= require('compression'); //??
const cors 			= require('cors');
const debug       	= require('debug')('requirement:app');
const AppController = require('./controllers/AppController');
const app 			= express();
/* 
app.set('views', path.join(__dirname, 'views'));		//?
app.set('view engine', 'ejs');							//?
app.engine('html', require('ejs').renderFile);			//? */
app.use(logger('dev'));									//?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
/*app.use(express.static(path.join(__dirname, '/public/')));	//?*/
app.use(compression());	

app.use(require('./router'));					//Importa arquivos de rota 

app.use(AppController.notFound);
app.use(AppController.errorHandler);
 


debug('env:', process.env.NODE_ENV || 'development');

module.exports = app;
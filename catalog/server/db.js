'use strict';

const mongoose = require('mongoose');	//Dependencia do mongoose
const env = require('./env');			//Importa variaveis do ambiente (definidas pelo usuario)


mongoose.Promise = global.Promise;		//resolver problema de depreaciated
mongoose.connect(env.database.uri, 		//Obtem as credencias do arquivo env.js
				 env.database.credentials);
const db = mongoose.connection;

db.on('open', () => {
	console.log(`Connected with: ${env.database.uri}`);
});

db.on('error', (err) => {
	console.log(`Mongo error: ${err}`);
});

process.on('SIGINT', () => {
	db.close(() => {
		console.log('MongoDB disconnect through app termination.');
		process.exit(0);
	});
});

module.exports = db;
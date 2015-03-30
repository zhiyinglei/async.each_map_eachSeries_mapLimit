var async = require('async');


module.exports = sendAll;

function sendAll(messages, cb){
	async.map(messages,send, cb);
}

function send(message, cb) {
	console.log('sending message %j', message);
	setTimeout(cb, randomTimeout(), null, randomResult());
}

function randomTimeout(){
	return Math.floor(Math.random() * 1e3);
}

function randomResult(){
	return Math.floor(Math.random() * 1e10);
}

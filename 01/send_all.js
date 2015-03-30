var async = require('async');


module.exports = sendAll;

function sendAll(messages, cb){
	async.each(messages, send, cb);
}

function send(message, cb) {
	console.log('sending message %j', message);
	setTimeout(function(){
		console.log('finished sending message %j', message);
		cb();
	}, randomTimeout());
}

function randomTimeout(){
	return Math.floor(Math.random() * 1e3);
}


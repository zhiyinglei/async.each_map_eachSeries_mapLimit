var async = require('async');


module.exports = sendAll;

function sendAll(messages, cb){
	//async.eachLimit(messages,2, send, cb);
	async.mapLimit(messages,2, send, cb);
}

function send(message, cb) {
	console.log('sending message %j', message);
	setTimeout(finished, randomTimeout(), null, randomResult());

	function finished(err, result) {
		console.log('finished sending %j', message);
		cb(err, result);
	}
}

function randomTimeout(){
	return Math.floor(Math.random() * 1e3);
}

function randomResult(){
	return Math.floor(Math.random() * 1e10);
}

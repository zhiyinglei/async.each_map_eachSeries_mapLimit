var sendAll = require('./send_all');

var messages = ['message 1', 'message 2', 'message 3',
				'message 4', 'message 5', 'message 6'];

sendAll(messages, function(err, results){
	if(err){
		console.error(err);
	}
	else{
		console.log('all messages sent. results: %j', results);
	}
})
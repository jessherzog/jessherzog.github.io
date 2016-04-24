var Twit = require('twit');

var T = new Twit({
	consumer_key: 'PQ3ZNNhEeAWs7GpIwvoleQZ3C',
	consumer_secret:'zuDGm00KZzuwSwgClqQWLgXrsNtqGR4iOHZyot2GT1V67SYLgO',
	access_token:'827387815-PokDLnvLSo18Got6jbNRzguN5g0cmkaP5CdH3b3O',
	access_token_secret:'vKBIFJ7MawcXjmdNQOxGVFo9ATlU04t82FJcQLAwqTHV8',
	timeout_ms:60*1000,
})

T.post('statuses/update', {status: "¯|_(ツ)_/¯ ¯|_(ツ)_/¯ ¯|_(ツ)_/¯ ¯|_(ツ)_/¯"},

function (err, data, response){
	console.log(err);
	console.log(data);
	console.log(response); 
})


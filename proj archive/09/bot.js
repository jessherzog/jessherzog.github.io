var Twit = require('twit');

var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);

// var T = new Twit({
// 	consumer_key: 'DEgpKiClCcf1acpN5T3MAWXsX',
// 	consumer_secret:'jxvx1ekQqKswqGUSudAjVvXgGyAns8ztHqx2Eg9kwLVygh4VGn',
// 	access_token:'724354427465961472-BHhYvgBZ4HalSm2mjTnPTZzTQj3e0cX',
// 	access_token_secret:'FWqq740Vb1RpDL4wtWUISaH4fU7Uiub3ZeqBqGz57RPpa',
// 	timeout_ms:60*1000,
// });

var tracery = require('tracery-grammar');

var rawGrammar = 
{
	"origin": [
		"... please don't #alternatives#. I #something#...",
	],

	"alternatives": [
		"freak out", 
		"hate me", 
		"tell anyone", 
		"act surprised", 
		"look so pleased"
	],
	"something": [
		"took care of it", 
		"have no money", 
		"am so not in the mood", 
		"too tired", 
		"know you already worry too much", 
		"know everything", 
		"don't even care anymore"
	]
}

var processedGrammar = tracery.createGrammar(rawGrammar);

processedGrammar.addModifiers(tracery.baseEngModifiers); 

var tweet = processedGrammar.flatten("#origin#");
console.log(tweet);

T.post('statuses/update', { status: tweet }, function(err, data, response) {
  console.log(data);
});




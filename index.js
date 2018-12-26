const yargs = require('yargs');
const cat = require('./cat-api/cats');
const pup = require('./dog/pup');
const text = require('./text/smsUtil');

const argv = yargs
	.options({
		nm: {
			demand: true,
			alias: 'name',
			describe: 'Name to send text to',
			string: true
		},
        t: {
			demand: true,
			alias: 'type',
			describe: 'Type of picture to send',
			string: true
		},
        m: {
			demand: true,
			alias: 'message',
			describe: 'Type message to send with picture',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var name = argv.name;
var type = argv.type.toLowerCase();
var msg = argv.message;

if(type == 'cat') {

    cat.fetchURL((error, imageURL) => {
    
    if(error) {
        console.log('Error in fetching cat images: ' + error);
    }

    let url = imageURL.url;
    
    text.sendText(name, url, msg, (err, done) => {
        
        if(err) {
            console.log('Error in calling sendText from index.js: ' + err);
        } 
        
        console.log(done); 
    });

    });
} else if(type == 'dog') {
   
    pup.fetchURL((err, pupURL) => {
        if(err) {
            console.log('Error in fetching image urls for dogs : ' + err);
        }

        let url = pupURL.url;
        console.log(url);
        text.sendText(name, url, msg, (err, done) => {
        
        if(err) {
            console.log('Error in calling sendText from index.js: ' + err);
        } 
        
        console.log(done); 
    });

    });
}


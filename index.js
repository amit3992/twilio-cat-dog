const yargs = require('yargs');
const cat = require('./cat-api/cats');
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

//console.log('Address: ' + name + ", type: " + type);
//console.log('Message in text: ' + msg);

if(type == 'cat') {

    cat.fetchURL((error, imageURL) => {
    
    if(error) {
        console.log('Error: ' + error);
    } 
    let url = imageURL.url;
    
    text.sendText(name, url, msg, (err, done) => {
        
        if(err) {
            console.log('Error in calling sendText from index: ' + err);
        } 
        
        console.log(done); 
    });

    //console.log('Send pic to: ' + name + ' with the message: ' + msg);
    });
} else if(type == 'dog') {
    console.log('Fetching puppy images..');
}


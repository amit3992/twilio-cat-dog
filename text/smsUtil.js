const secret = require('../secrets/secret.js');
const twilio = require('twilio');

const sendText = (name, imageURL, message, callback) => {
    //console.log('Inside send text to: ' + name);

    const accountSID = secret.twilioSid;
    const accountToken = secret.twilioToken;

    /* Create REST APi client */
    const client = twilio(accountSID, accountToken);
    var recipient = secret.AmitNum;

    if(name == 'Alida' || name == 'alida') {
        recipient = secret.AlidaNum;
    }
    console.log(recipient);
    client.messages.create(
        {
            to: recipient,
            from: secret.twilioNum,
            body: message,
            mediaUrl: imageURL,
        },
        (err, message) => {
            
            if(err) {
                console.log('Error in sendText: ' + err);
                callback(message);
            }
            
            callback(undefined, 'SUCCESS! Picture sent to ' + name + ' with the message : ' + message.body + ' @ ' + recipient);
        }
    );
}

module.exports.sendText = sendText;
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const cat = require('./cat-api/cats');
const pup = require('./dog/pup');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    console.log("HELLOOOO");
});

app.post('/sms', (req, res) => {
    
    const twiml = new MessagingResponse();
    const message = twiml.message();

    let request = req.body.Body.toLowerCase();
    let url = 'https://www.michaeltunney.info/wp-content/uploads/2018/08/guilty-puppy-dog-funny-did-somebody-say-puppy-dog-eyes-imgur-of-guilty-puppy-dog.jpg';
  
  if (request && request.includes('weebo')) {
    message.body("Hi! I'm Weebo! Reply with 'dog' for a picture of a cute puppy or 'cat' for a cute kitty");
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  } else if (request && request.includes('dog')) {
    pup.fetchURL((err, pupURL) => {
        if(err) {
            console.log('Error in fetching image urls for dogs : ' + err);
        }

        url = pupURL.url;
        console.log("doggie url -> ", url);

        message.body("Here's a puppy for you :*");
        message.media(url);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());

  });
  
  }else if (request && request.includes('cat')) {
    
    cat.fetchURL((error, imageURL) => {
    
    if(error) {
        console.log('Error in fetching cat images: ' + error);
    }

    url = imageURL.url;
    console.log("new url -> ", url);
    message.body("Here's a kitty for you :*");
    message.media(url);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  });
    
  } else {
    message.body(
        "Oh no! I don't know what that means yet :( Reply with 'dog' for a picture of a cute puppy or 'cat' for a cute kitty."
    );
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  }
});
  
  http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
  });
  
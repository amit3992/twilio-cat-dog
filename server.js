const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    console.log("HELLOOOO");
});

app.post('/sms', (req, res) => {
    
    const twiml = new MessagingResponse();

  if (req.body.Body && req.body.Body.toLowerCase().includes('weebo')) {
    twiml.message("Hi! I'm Weebo! Reply with 'dog' for a picture of a cute puppy or 'cat' for a cute kitty");
  } else if (req.body.Body && req.body.Body.includes('dog')) {
    twiml.message('Sending doggie pic');
  }else if (req.body.Body && req.body.Body.includes('cat')) {
    twiml.message('sending kitty pic');
  } else {
    twiml.message(
        "Oh no! I don't know what that means yet :( Reply with 'dog' for a picture of a cute puppy or 'cat' for a cute kitty."
    );
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());

    
  });
  
  http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
  });
  
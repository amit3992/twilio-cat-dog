# twilio-cat-dog
**Perfect for cheering up a friend**
Command line application built with Node + Twilio + random-puppy + cat-api.
This application will send a text with a new picture of either a dog or a cat to a friend who needs some cheering up!


**USAGE:**

--name : Who do you want to send the text to

-t (type) : 'dog' or 'cat' pictures

-m (message) : Send the picture with this message

* `node index.js --name "Amit" -t "dog" -m "Here is a pupicture for you"`

Fetching puppy image..

SUCCESS! Picture sent to Amit with the message : Here is a pupicture for you @ +1XXX-YYY-ZZZZ

* `node index.js --name "Amit" -t "cat" -m "Here is a kitty picture for you."`

Fetching cat image..

SUCCESS! Picture sent to Amit with the message : Here is a kitty picture for you. @ +1XXX-YYY-ZZZZ

**RESULT**

Result: 
![alt text](https://github.com/amit3992/twilio-cat-dog/blob/master/images/IMG_0659.PNG "Result 1")

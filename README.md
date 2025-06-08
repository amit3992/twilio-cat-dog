# Twilio Cat-Dog Bot

A Node.js application that sends cute cat and dog pictures via SMS using Twilio. Perfect for cheering up friends or creating an interactive SMS bot!

## Features

- Send cat or dog pictures via SMS using Twilio
- Interactive SMS bot named "Weebo" that responds to commands
- Command-line interface for sending pictures directly
- Uses The Cat API and Random Puppy API for high-quality images

## Prerequisites

- Node.js (v12 or higher)
- Twilio Account and Phone Number
- The Cat API key (optional, for cat images)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/twilio-cat-dog.git
cd twilio-cat-dog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `secrets/secret.js` file with your Twilio credentials:
```javascript
module.exports = {
    accountSid: 'your_account_sid',
    authToken: 'your_auth_token',
    twilioNumber: 'your_twilio_phone_number'
};
```

## Usage

### SMS Bot Mode

1. Start the server:
```bash
node server.js
```

2. The server will run on port 1337. Make sure to configure your Twilio webhook to point to your server's `/sms` endpoint.

3. Text the following commands to your Twilio number:
- `weebo` - Get a welcome message and instructions
- `dog` - Receive a random puppy picture
- `cat` - Receive a random cat picture

### Command Line Interface

Send pictures directly using the command line:

```bash
# Send a dog picture
node index.js --name "Friend Name" -t "dog" -m "Here's a cute puppy for you!"

# Send a cat picture
node index.js --name "Friend Name" -t "cat" -m "Here's a cute kitty for you!"
```

Command line options:
- `--name`: Recipient's name
- `-t`: Type of picture ('dog' or 'cat')
- `-m`: Custom message to send with the picture

## Project Structure

```
twilio-cat-dog/
├── server.js          # Main server and SMS bot implementation
├── index.js          # Command line interface
├── cat-api/          # Cat API integration
├── dog/              # Dog API integration
└── secrets/          # Configuration and API keys
```

## Dependencies

- express: Web server framework
- twilio: SMS messaging
- body-parser: Request body parsing
- node-fetch: HTTP requests
- random-puppy: Dog image API
- yargs: Command line argument parsing

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC License - see LICENSE file for details

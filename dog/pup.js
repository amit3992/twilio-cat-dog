const randomPuppy = require('random-puppy');
const secret = require('../secrets/secret');

const fetchURL = (callback) => {
    console.log('Fetching puppy image..');
    randomPuppy()
        .then((imgURL) => callback(undefined, {
            url: imgURL
        }))
        .catch((reason) => callback(reason, undefined));
};

module.exports.fetchURL = fetchURL;

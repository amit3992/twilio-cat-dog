const fetch = require('node-fetch');
const secret = require('../secrets/secret');

const fetchURL = (callback) => {
    console.log('Fetching cat image..');
    getCat()
        .then((imgURL) => callback(undefined, {
            url : imgURL
        }))
        .catch((reason) => {
            callback('Error: ' + reason.message, undefined);
        });
  
};

const getCat = () => {
    return fetch(`http://thecatapi.com/api/images/get?api_key=$MjY4MTk2&format=html`)
    .then((response) => response.text())
    .then((response) => new RegExp('src="(.+?)"').exec(response)[1]);
}

module.exports.fetchURL = fetchURL;


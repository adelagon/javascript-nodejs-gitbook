require('request');
var request = require('request-promise-native');

module.exports.makeAPIRequest = makeAPIRequest;

async function makeAPIRequest(opts) {
    try {
        let response = await request.get(opts);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}



# Making API requests

node.js already has a built **http** library that can do this but it is fairly low-level and lack most of the functionalities.

On this tutorial, we will be using the popular **request** library and its **request-promise-native** wrapper. The request-promise-native wrapper allows you to use the request library using the native ES6 promises. It makes you life more easier say for example:

{% runkit %}
var request = require("request");

// without using promise
request.get({"uri": "https://jsonplaceholder.typicode.com/todos/1",
             "method": "GET",
             "json": true},
             function (err, res, body) {
                if (err) { return console.log(err); }
                console.log(body);
             });
{% endrunkit %}

versus:

{% runkit %}
require('request');
var request = require('request-promise-native');

// Using promise with async/await
async function makeAPIRequest(opts) {
    try {
        let response = await request.get(opts);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}

async function main() {
    let opts = {"uri": "https://jsonplaceholder.typicode.com/todos/1",
                "method": "GET",
                "json": true};
    try {
        let result = await makeAPIRequest(opts);
    } catch (error) {
        console.log(error);
    }
}

main();
{% endrunkit %}


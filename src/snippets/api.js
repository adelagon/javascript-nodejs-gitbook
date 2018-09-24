require('request');
var request = require('request-promise-native');

// Using promise with async/await
async function makeAPIRequest(opts) {
    try {
        let response = await request.get(opts);
        return response;
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
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();
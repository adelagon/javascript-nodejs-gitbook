# Organizing your code

To reduce clutter and improve the way other developers in navigating your project. It is recommended to organize your code into modules. Assuming we have created a separate file named **myutils.js**

```javascript
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
```

The **module.exports.{name}** explicity informs that javascript interpreter that you are exposing the function makeAPIRequest to be referenced by an external javascript module. Using this function for example can be done as if you are importing built-in/third-party libraries. Say for example in index.js:

```javascript
let myutils = require("./myutils");

async function main() {
    let opts = {"uri": "https://jsonplaceholder.typicode.com/todos/1",
            "method": "GET",
            "json": true};
    try {
        let result = await myutils.makeAPIRequest(opts);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();
```

## Externalize your configuration as much as you can

It is a good practice to not hardcode any configuration on your code (ie. database connection details, username, password, etc.). One good way of managing configuration is to simply externalize it on a separate file.

If you refer to **src/snippets/config.json** and **src/snippets/extern.js** you'll see it in action.

There also other third-party configuration management libraries that you may use such as **node-config-manager** (https://github.com/Valko54/node-config-manager) that give you more features.


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


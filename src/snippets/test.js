async function sleep5() {
    return new Promise(function (resolve, reject) {
                           setTimeout(function() { resolve () }, 5000)
                       });
}

async function main() {
    sleep5();
    console.log("No waiting");
    await sleep5();
    console.log("With await");
}

main();
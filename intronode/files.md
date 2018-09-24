# File Handling in node.js

File handling in node.js is quite simple. 

If you look at the **src/files.js** directory you be able to see sample functionalities that you'll probably be using 80% of the time:

```javascript
let fs = require("fs");

// "Checking file info"
let stats = fs.statSync("/etc/passwd");
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats);

// "Opening/Creating a file"
var fd = fs.openSync("hello.txt", "a+");

// "Writing to a file")
fs.writeSync(fd, "Hello!\n");
// or a shorter version
fs.appendFileSync("hello.txt", "Hello!\n")

// "Closing a file")
fs.closeSync(fd);

// Reading a line terminated file"
fs.readFileSync("cars.txt").toString().split("\n").forEach(function (item) { console.log(item); });

// or better use this if the file is too large
let readline = require("readline");
let rl = readline.createInterface({
    input: fs.createReadStream("FL_insurance_sample.csv"),
    crlfDelay: Infinity
});

rl.on("line", function(line) { console.log(line) });
```

You may read more details about the built-in file system library of node.hs here: https://nodejs.org/dist/latest-v8.x/docs/api/fs.html

**[IMPORTANT NOTE]** you may notice that some of the **fs** methods has two versions, an asynchronous and a synchronous one. Most of the time, it is better to just use the synchronous one.

## CSV Helper Library

On a day to day basis, it is common that you'll be dealing with comma-delimited files. Fortunately, node.js has a whole gamut o third party libraries that implements it. For this tutorial, we will be using the **csv** library (https://www.npmjs.com/package/csv)

```javascript
npm install --save csv
```

Usage can be as simple as:

```javascript
let parse = require('csv-parse');
fs.createReadStream("assets/FL_insurance_sample.csv")
    .pipe(parse({delimiter: ','}))
    .on('data', function(row) {
        console.log(row);  
    })
```


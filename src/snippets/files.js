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
fs.readFileSync("assets/cars.txt").toString().split("\n").forEach(function (item) { console.log(item); });

// or better use this if the file is too large (ie. csv)
let readline = require("readline");
let rl = readline.createInterface({
    input: fs.createReadStream("assets/FL_insurance_sample.csv"),
    crlfDelay: Infinity
});
rl.on("line", function(line) { console.log(line) });

// csv-parse, makes it easier to parse csv files
let parse = require('csv-parse');
fs.createReadStream("assets/FL_insurance_sample.csv")
    .pipe(parse({delimiter: ':'}))
    .on('data', function(row) {
        console.log(row);  
    })






let mysql = require('mysql2/promise');

let config = {
    "host": "localhost",
    "user": "dbuser",
    "password": "p455w0rd_",
    "database": "training"
};

let pool_config = {
    "host": 'localhost',
    "user": 'dbuser',
    "database": 'training',
    "password": "p455w0rd_",
    "waitForConnections": true,
    "connectionLimit": 10,
    "queueLimit": 0
};

async function main() {
    //let con = await mysql.createConnection(config);
    // or we use pool instead
    try {
        var con = await mysql.createPool(pool_config);
    } catch (e) {
        console.log(e);
    }

    try {
        var [rows, fields] = await con.execute("SELECT * FROM books WHERE author_id = ?", [1]);
        console.log(rows);
    } catch (e) {
        console.log(e);
    }

    try {
        var [rows, fields] = await con.execute("INSERT INTO books (title, author_id, copyright) VALUES (?, ?, ?)", ["The Prince and the Pauper", 1, 1881]);
        console.log(rows);
    } catch (e) {
        console.log(e);
    }

    try {
        var [rows, fields, err] = await con.execute("DELETE FROM books WHERE title=?", ["The Prince and the Pauper"]);
    } catch (e) {
        console.log(e);
    }

    try {
        await con.end();
    } catch (e) {
        console.log(e);
    }

    console.log("Done!");
}

main();
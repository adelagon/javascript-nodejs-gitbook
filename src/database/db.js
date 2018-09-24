let mysql = require('mysql2');

let config = {
    "host": "localhost",
    "user": "dbuser",
    "password": "p455w0rd_",
    "database": "training"
};

let con = mysql.createConnection(config);

// SELECT
con.execute("SELECT * FROM books",
    function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log(results);
    });

// SELECT with Prepared Statements
con.execute("SELECT * FROM books WHERE author_id = ?", [1],
    function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log(results);
    });

// INSERT
con.execute("INSERT INTO books (title, author_id, copyright) VALUES (?, ?, ?)", ["The Prince and the Pauper", 1, 1881],
    function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log(results);
    });

// UPDATE
con.execute("UPDATE books SET copyright=? WHERE id=?", [1882, 13],
    function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log(results);
    });

// DELETE
con.execute("DELETE FROM books WHERE title=?", ["The Prince and the Pauper"],
    function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log(results);
        // Close connection;
        con.end();
    });



// Using Connection Pools
let pool_config = {
  "host": 'localhost',
  "user": 'dbuser',
  "database": 'training',
  "password": "p455w0rd_",
  "waitForConnections": true,
  "connectionLimit": 10,
  "queueLimit": 0
}

let pool = mysql.createPool(pool_config);

// SELECT
pool.execute("SELECT * FROM books",
    function(err, results, fields) {
        if (err) {
            throw err;
        }
        // Close pool
        //console.log(results);
        //pool.end();
    });



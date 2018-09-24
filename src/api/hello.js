let express = require('express')
let app = express()

app.get('/', function (req, res) {
    res.json({"message": "Hello, world!"});
});

app.listen(3000, function () { console.log("API Server listening on port 3000") });

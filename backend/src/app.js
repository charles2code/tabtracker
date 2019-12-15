console.log('------------------------------------');
console.log("HEllO World!");
console.log('------------------------------------');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: "Server IS UP!"
    });
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
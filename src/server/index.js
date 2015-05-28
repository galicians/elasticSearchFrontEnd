var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 4000;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(PORT, function() {
    console.log('app running at port', PORT);
});

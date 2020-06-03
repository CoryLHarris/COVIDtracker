var express = require('express');
var bodyParser = require('body-parser');
 var db = require('../database');
 const {API_KEY} = require( './config')

var app = express();

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));



//app.get('/', function (req, res) {

//});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
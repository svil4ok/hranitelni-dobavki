'use strict';

var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
var express = require("express");
var port = process.env.PORT || 3030;
var app = express();

app.use(methodOverride());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.listen(port);
console.log("Server is up and running at port " + port);

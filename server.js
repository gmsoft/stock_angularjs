/*
//Lectura de los recursos del directorio
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");

var server = http.createServer(function(request, response) {
  var done = finalhandler(request, response);
  serve(request, response, done);
});

server.listen(8000);
console.log('Server up!');
*/

//Implementacion de Express en Node.JS
var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

app.listen(8089)



var cors = require('cors');
var compression = require('compression');
var bodyParser = require("body-parser");

//Implementacion de Express en Node.JS
var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

//Mercado Libre con NodeJS
var meli = require('mercadolibre');

//var meliObject = new meli.Meli(client_id, client_secret, [access_token], [refresh_token]);
var meliObject = new meli.Meli('5214857140046304', 'EZsN5KbLIM2VFXznavxafy2YlTlCDuw5');


var allowMethods = function(req, res, next) {
	res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
	next();
}

var allowCrossTokenHeader = function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'token');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.setHeader('Content-Type', 'application/json');
    next();
}

var auth = function(req, res, next) {
  if (req.headers.token === "password123456") {
    return next();
  } else {
    return  next(new Error('No autorizado'));
  }
};

app.use(cors()); //enable cors
app.use(compression()); //compress the files transferred
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//Esto que esta a continuacion es para resolver un problema del tamano de los jason que manejamos.
app.use(bodyParser.json({ limit: '50mb' }));//allows HTML modification in POST method 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(allowMethods);
app.use(allowCrossTokenHeader);
//app.use(logger('dev')); //show all requests in console
//app.use(methodOverride()); //emules DELETE and PUT





app.get('/api/meli/categories', function(req, res){
	/*
  var dataBody = req.body;
	var auth_url = dataBody.authurl; 

	https.get(auth_url , function(response) {
	  
	  response.on('data', function(d) {
		process.stdout.write(d);
		res.send(d);
	  });

	}).on('error', function(e) {
	  res.send(e);
	});	
  */
  //Get categories from mercado libre argentina
  meliObject.get('sites/MLA/categories', function (err, res) {
      console.log(err, res);
      /** returns:
          err = null
          res = [ 
                  { id: 'MLA5725', name: 'Accesorios para Vehículos' },
                  { id: 'MLA1071', name: 'Animales y Mascotas' },
                  { id: 'MLA1367', name: 'Antigüedades' },
                  { id: 'MLA1368', name: 'Arte y Artesanías' },
                  { id: 'MLA1743', name: 'Autos, Motos y Otros' },
                  { id: 'MLA1384', name: 'Bebés' },
                  ...
              ]
      */
  });
	
	//res.send(JSON.stringify({ redirect_url: url }));
		
}); 

//creación del servidor en el puerto 8089
app.listen(8089,  function(){
  console.log ('Servidor escuchando en puerto ' + 8089);
});



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

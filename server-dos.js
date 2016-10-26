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
	//Get categories from mercado libre argentina
  meliObject.get('sites/MLA/categories', function (err, response) {
       console.log(err, res);
       res.send(response);     
  });	
	//res.send(JSON.stringify({ redirect_url: url }));		
}); 

//creación del servidor en el puerto 8089
app.listen(8087,  function() {
  console.log ('Servidor escuchando en puerto ' + 8087);
});

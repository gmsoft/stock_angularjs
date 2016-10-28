var cors = require('cors');
var compression = require('compression');
var bodyParser = require("body-parser");
var http = require('http');
var https = require('https');
//https.globalAgent.options.secureProtocol = 'SSLv3_method';
var util = require('util');
var url = require('url');

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


app.get('/api/meli/token', function(req, res) {
  /*
  var redirect_uri = 'http://localhost' 
  var auth_url = meliObject.getAuthURL(redirect_uri);
  console.log(auth_url);
  res.send(JSON.stringify({ redirect_url: auth_url }));
  */
  
  var auth_url = 'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=5214857140046304&redirect_uri=http://localhost:8089/auth/mercadolibre/callback';
  
  https.get(auth_url , function(response) {
		//console.log(response);
		response.on('data', function(d) {
			process.stdout.write(d);
			res.send(d);
		});
	}).on('error', function(e) {
		res.send(e);
	});	
	
});

//https.globalAgent.options.secureProtocol = 'SSLv3_method';
/*
app.get('/auth/mercadolibre', function (req,res) {
    var authCallback = 'http://localhost:8087/auth/mercadolibre/callback';
    var redirectUrl = util.format('https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=%s&redirect_uri=%s',
    '5214857140046304', authCallback);
    res.redirect(redirectUrl);
}); */

// Cuando me logeo a google tomo el codigo que me devuelve con la funcion a continuacion:
app.get('/auth/mercadolibre/callback', function(req, res){
	
	var dataBody = req.body;
	var auth_url = dataBody.authurl; 

	//console.log(dataBody);
	
	res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(util.inspect(dataBody));
	/*
	https.get(auth_url , function(response) {
	  
	  response.on('data', function(d) {
		process.stdout.write(d);
		res.send(d);
	  });

	}).on('error', function(e) {
	  res.send(e);
	});	
	*/
		
});

// Obtiene el codigo y redirecciona
app.get('/api/ga/getcode', function(req, res) {
	var code = req.query.code;
	//console.log('Codigo:' + code);
	//res.send(JSON.stringify({ codigo: code }));
	var host = req.headers.host;
	//localhost:1338
	var uri = 'http://localhost:51740/#/widgets/loading?code=' + code;
	if (host != 'localhost:1338') { //LocalHost
		uri = 'http://board.shiftmetrics.net/#/widgets/loading?code=' + code;
	}
	res.redirect(uri);
});

//app.get('/auth/mercadolibre/callback', function (req, res) {
app.get('ZZZZZZZZ/auth/mercadolibre/callback', function (req, res) {
    var code = req.query.code;
	
	console.log('query:' + req.url);
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
	
	//console.log('query:' + req.query);
	
	util.inspect(req);
	
	res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(util.inspect(req.query));
	/*
    var authcallback = 'http://localhost:8089';
    var accessTokenUrl = util.format('https://api.mercadolibre.com/oauth/token?grant_type=authorization_code&client_id=%s&client_secret=%s&code=%s&redirect_uri=%s',
    '5214857140046304', 'EZsN5KbLIM2VFXznavxafy2YlTlCDuw5', code, authcallback);
	*/
	
	/*
	res.send('OK');
	
    https.post(accessTokenUrl, function(error, response, body) {
        //res.send(body);
		console.log(body);
    });
	*/
});



app.get('/api/meli/categories', function(req, res){
	//Get categories from mercado libre argentina
  meliObject.get('sites/MLA/categories', function (err, response) {
       console.log(err, res);
       res.send(response);     
  });	
	//res.send(JSON.stringify({ redirect_url: url }));		
}); 

//creación del servidor en el puerto 8089
app.listen(8089,  function() {
  console.log ('Servidor escuchando en puerto ' + 8089);
});

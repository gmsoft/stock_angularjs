var cors = require('cors');
var compression = require('compression');
var bodyParser = require("body-parser");
var http = require('http');
var https = require('https');
https.globalAgent.options.secureProtocol = 'SSLv3_method';
var util = require('util');
var passport = require('passport');

//Implementacion de Express en Node.JS
var express = require('express'),
    app = express();

	
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

app.use(cors()); //enable cors
app.use(compression()); //compress the files transferred
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//Esto que esta a continuacion es para resolver un problema del tamano de los jason que manejamos.
app.use(bodyParser.json({ limit: '50mb' }));//allows HTML modification in POST method 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(allowMethods);
app.use(allowCrossTokenHeader);



var MercadoLibreStrategy = require('passport-mercadolibre').Strategy;
 
passport.use(new MercadoLibreStrategy({
    clientID: '5214857140046304',
    clientSecret: 'EZsN5KbLIM2VFXznavxafy2YlTlCDuw5',
    callbackURL: 'http://localhost:8087/auth/mercadolibre/callback',
  },
  function (accessToken, refreshToken, profile, done) {
    // + store/retrieve user from database, together with access token and refresh token 
    return done(null, profile); 
  }
));
 
passport.serializeUser(function (user, done) {
  done(null, user);
});
 
passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/auth/mercadolibre',
  passport.authorize('mercadolibre'));
 
app.get('/auth/mercadolibre/callback', 
  passport.authorize('mercadolibre', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home. 
    res.redirect('/');
  });
 
app.get('/', ensureAuthenticated, 
  function(req, res) {
    res.send("Logged in user: " + req.user.nickname);
  }
);
 
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
    return next(); 
  };
  res.redirect('/auth/mercadolibre');
};

//creación del servidor en el puerto 8089
app.listen(8087,  function() {
  console.log ('Servidor escuchando en puerto ' + 8087);
});
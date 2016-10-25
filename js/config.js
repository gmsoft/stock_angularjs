'use strict';

var app = angular.module('stockApp');

//Utilizaci�n del provider routeProvider de AngularJS para el manejo de enrutamiento
app.config(function($routeProvider) {
  $routeProvider
  .when("/stock/list", { //Ruta
    templateUrl : "partials/stock/list.html", //Vista parcial
    controller: 'StockController' // Controller
  })
  .when("/stock/add", {
    templateUrl : "partials/stock/add.html",
    controller: 'StockController'
	//topLef: ''
  })
  .when('/stock/edit/:id',  {
	  templateUrl: 'partials/stock/edit.html',
	  controller: 'StockController'
  })
  .when('/stock/publish/:id',  {
	  templateUrl: 'partials/stock/publish.html',
	  controller: 'PublishStockController'
  })
  .when("/dashboard", {
    templateUrl : "partials/dashboard/index.html",
    controller: 'DashboardController'
  })
  .when("/account/login", {
    templateUrl : "partials/account/login.html",
    controller: 'AccountController'
  })
  .when("/account/user-info", {
    templateUrl : "partials/account/user-info.html",
    controller: 'AccountController'
  })
  .otherwise({redirectTo: '/dashboard'});
  
  /* Configuration es el lugar donde se configuran los "providers" ( no las instancias)*/
  console.log("Configuration del modulo");
  
});

/*
Auth0
*/ 
app.config(function(authProvider) {

    // routing configuration and other stuff
    // ...
    authProvider.init({
      domain: 'shiftmetrics.auth0.com',
      clientID: 'eYFmD7aLsbMdNdKBAVkFIXGgBaAloPjG',
      loginUrl: '/account/login'
    });
  })

//Constantes de la aplicaci�n
app.constant('appGlobals', {
    appName: 'Sistema de Stock',
    appVersion: 'v0.1',
	appApiUri: 'http://localhost:8089/api'
});
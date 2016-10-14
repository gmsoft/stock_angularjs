'use strict';

var app = angular.module('stockApp');

//Utilización del provider routeProvider de AngularJS para el manejo de enrutamiento
app.config(function($routeProvider) {
  $routeProvider
  .when("/stock/list", { //Ruta
    templateUrl : "partials/stock/list.html", //Vista parcial
    controller: 'StockController' // Controller
  })
  .when("/stock/add", {
    templateUrl : "partials/stock/add.html",
    controller: 'StockController',
	//topLef: ''
  })
  .when('/stock/edit/:id',  {
	  templateUrl: 'partials/stock/edit.html',
	  controller: 'StockController'
  })
  .when("/dashboard", {
    templateUrl : "partials/dashboard/index.html",
    controller: 'DashboardController'
  })
  .when("/account/login", {
    templateUrl : "partials/account/login.html",
    controller: 'AccountController'
  })
  .otherwise({redirectTo: '/dashboard'})
});


//Constantes de la aplicación
app.constant('appGlobals', {
    appName: 'Sistema de Stock',
    appVersion: 'v0.1',
	appApiUri: 'http://localhost:8089/api'
});

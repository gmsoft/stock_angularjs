'use strict';
var app = angular.module('stockApp', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/stock/list", {
    templateUrl : "partials/stock/list.html",
    controller: 'StockController'

  })
  .when("/stock/add", {
    templateUrl : "partials/stock/add.html",
    controller: 'StockController'
  })
});

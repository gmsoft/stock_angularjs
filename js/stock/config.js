'use strict';

var stock = angular.module('stockModule');
/*
stock.config(function () {
	$scope.moduleName = 'stock';
	console.log("Evento del Modulo Stock :: config");
});

stock.run(function () {
	console.log("Evento del Modulo Stock :: running");
});
*/
//Constantes de la aplicación
stock.constant('stockGlobals', {
    moduleName: 'stock',
    moduleVersion: 'v0.1'
});

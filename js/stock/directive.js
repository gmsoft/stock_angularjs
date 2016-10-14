'use strict';

var app = angular.module("stockModule");

app.directive("crudActions", function() {
    return {
        restrict : "E",//Restringe a nivel elemento HTML
        template : '<a href="add.html">+ Agregar Producto</a>'
    };
});

app.directive("productGrid", function () {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'partials/stock/data-grid.html', // Es necesario correr en un servidor la aplicación para que funcionen las vistas parciales
    };
});


 
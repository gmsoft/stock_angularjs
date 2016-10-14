'use strict';

var app = angular.module("stockApp");

app.directive("crudActions", function() {
    return {
        restrict : "E",
        template : '<a href="add.html">+ Agregar Producto</a>'
    };
});

app.directive("productGrid", function () {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'data-grid.html',
    };
});


 
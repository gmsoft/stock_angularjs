'use strict';
angular.module('stockApp')
.controller('StockController' , function($scope) {
     $scope.products = [
        {code:'CP0001', description:'iPhone 7', price:700, active:true, notes:'Great cell phone', picture: '0001.jpg'},
        {code:'CP0002', description:'Tango 300', price:5, active:true, notes:'Very Old cell phone',  picture: '0002.jpg'},
        {code:'CP0003', description:'Nokia 1100', price:1000, active:true, notes:'Very Cool cell phone',  picture: '0003.jpg'},
        {code:'PC0001', description:'Apple Mackbook Pro', price:1500, active:true, notes:'Very Cool notebook',  picture: '0004.jpg'}
      ];
});

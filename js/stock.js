angular.module('stockApp')
.controller('StockController' , function($scope) {
     $scope.products = [
        {code:'0001', description:'iPhone 7', price:700, active:true, notes:'Great cell phone', picture: '0001.jpg'},
        {code:'0002', description:'Tango 300', price:5, active:true, notes:'Very Old cell phone',  picture: '0002.jpg'},
        {code:'0003', description:'Nokia 1100', price:1000, active:true, notes:'Very Cool cell phone',  picture: '0003.jpg'}
      ];
});
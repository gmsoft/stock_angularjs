'use strict';
angular.module('dashboardModule')
.controller('DashboardController' , function($scope) {
   //Mosaicos del dashboard
   $scope.tiles = [{
     id : 1,
	 label : 'Productos',
     url : '/#/stock/list' 	
   },
   {
	  id : 2,
	  label : 'Publicar Producto',
      url : '/#/stock/publish'
   }]; 
});
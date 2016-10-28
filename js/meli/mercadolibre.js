'use strict';
angular.module('mercadolibreModule')
.controller('MeLiProfileController', ['$scope', '$location', 'MercadoLibreService', '$http', '$window',
function ($scope, $location, MercadoLibreService, $http, $window) {

    var init = function() {
      MercadoLibreService.GetSellerData().then(function(response){
        $scope.sellerData = response.data;
        console.log(response.data);
      });

      MercadoLibreService.GetProductsBySeller().then(function(response){
        $scope.productsList = response.data.results;
        console.log(response.data);
      });
    }
    init();
}]);

'use strict';

angular.module('mercadolibreModule')
.factory('MercadoLibreService', ['$http', 'appGlobals', function ($http, appGlobals) {
    var service = {};

    var serviceBase = appGlobals.appApiUri;
    var sellerId = appGlobals.mercadoLibre.sellerId;

    service.GetSellerData = function () {
        return $http.get("https://api.mercadolibre.com/users/" + sellerId)
               .then(function (response) {
                   return response;
               });
    };

    service.GetProductsBySeller = function () {
       return $http.get("https://api.mercadolibre.com/sites/MLA/search?seller_id=" + sellerId)
              .then(function (response) {
                  return response;
              });
   };

	 /*
    service.SaveProduct = function (product) {
        return $http.post(serviceBase + "/api/product", product)
                  .then(function (response) {
                      return response;
                  });
    };

    //Metodo para actualizar producto
    service.UpdateProduct = function (product) {
        return $http.put(serviceBase + "/api/product", product)
                  .then(function (response) {
                      return response;
                  });
    };

	 //Elimina un producto
    service.DeleteProduct = function (productCode) {
        return $http.delete(serviceBase + "/api/product", { params: { code: productCode } })
                 .then(function (response) {
                     return response;
                 });
    };
	 */
    return service;

}]);

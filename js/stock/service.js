'use strict';

angular.module('stockModule')
.factory('StockService', ['$http', 'appGlobals', function ($http, appGlobals) {
    var service = {};
    
    var serviceBase = appGlobals.appApiUri; 

    ////Trae los presupuesto Pendientes segun usuario y su rol y retorna un promise
    service.GetAllProducts = function () {
        return $http.get("/json-data/products.json")
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
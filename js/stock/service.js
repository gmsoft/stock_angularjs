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
	//Metodo para guardar un nuevo usuario
    service.GuardarUsuario = function (usuario) {
        return $http.post(serviceBase + "/api/Account/PostUsuario", usuario)
                  .then(function (response) {
                      return response;
                  });
    };

    //Metodo para actualizar usuario
    service.UpdateUsuario = function (usuario) {
        return $http.put(serviceBase + "/api/Account/PutUsuario", usuario)
                  .then(function (response) {
                      return response;
                  });
    };
	
	 //Elimina Rol de Usuario
    service.EliminarRolUsuario = function (Id) {
        return $http.delete(serviceBase + "/api/Presupuesto/DeleteRolUsuario", { params: { UserId: User.Id, RolId: User.RolName } })
                 .then(function (response) {
                     return response;
                 });
    };
	*/

    return service;

}]);



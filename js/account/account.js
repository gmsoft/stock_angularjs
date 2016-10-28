'use strict';
angular.module('accountModule')
.controller('AccountController' , function($scope, $location, auth, $http, $window) {  
    $scope.signin = function() {
        auth.signin({
            authParams: {
                scope: 'openid name email' // Specify the scopes you want to retrieve
            }
        }, function(profile, idToken, accessToken, state, refreshToken) {
            console.log(profile);
            console.log(idToken);
            console.log(accessToken);
            console.log(state);
            console.log(refreshToken);
            $location.path('account/user-info');
        }, function(err) {
            console.log("Error :(", err);
        });
    }

    $scope.meliLoginNodeJS = function() {
          $window.location.href = "http://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=5214857140046304";
		  
		 //$location.path('http://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=5214857140046304');
         
		 /*
         MELI.init({client_id: 5214857140046304});
            ///Así de fácil. Luego, la siguiente línea de código mostrará el primer nombre que registraste en MercadoLibre:
            MELI.login(function() {
                MELI.get(
                    "/users/me",{},
                    function(data) { 
                        alert("Hello " + data[2].first_name) 
                    }
                );
            });
			*/
         
    }
	
	$scope.meliLogin = function() {
		    MELI.init({client_id: 5214857140046304});
            ///Así de fácil. Luego, la siguiente línea de código mostrará el primer nombre que registraste en MercadoLibre:
            MELI.login(function() {
                MELI.get(
                    "/users/me",{},
                    function(data) { 
                        alert("Hello " + data[2].first_name) 
                    }
                );
            });
	}
	
});
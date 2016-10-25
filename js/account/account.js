'use strict';
angular.module('accountModule')
.controller('AccountController' , function($scope, $location, auth, $http) {  
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

    $scope.meliLogin = function() {
         $location.path('http://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=5214857140046304');
         
    }
});
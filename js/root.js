'use strict';

//Para el manejo del scope Padre en la jerarquia, aqui se manejara todo los global a la aplicacion (Manejo de route)
angular.module('stockApp')
  .controller('RootController', ['$rootScope', '$scope','$location', 'appGlobals', function ($rootScope, $scope, $location, appGlobals) {
	  
	  $scope.appVersion = appGlobals.appVersion;
	  $scope.appName = appGlobals.appName;
	  
      //Tomo el route actual
      $scope.$on('$routeChangeSuccess', function (e, current, previous) {
          $scope.currentRoute = current;
          $scope.routeHasError = false;
      });

      //Route Error
      $scope.$on('$routeChangeError', function (event, current, previous, error) {
		  $console.log(event);
          if (error.status === 404) {
              $scope.routeHasError = true;
              $scope.routeError = current.routeErrorMessage;
          }
      });
	  
	  $scope.print = function(){
		window.print();  
	  };
	  
  }])
  .run(function ($rootScope, $location, $interval, auth) {

       /*
        //Gestiona el control de 5 minutos de inactividad
        var init = function () {
            if (inicio > 0) {
                lastDigestRun = Date.now();
                var idleCheck = $interval(function () {
                    var now = Date.now();
                    if (now - lastDigestRun > 15 * 60 * 10000) {
                        isout = true;
                    }
                }, 60 * 1000);
            }
            inicio++;
        }
		*/

        $rootScope.$on('$routeChangeSuccess', function () {
            /*
			if (isout) { //Si ocurrienron 5 minutos de inactividad, el sistema automaticamente se desloguea
                isout = false;
                init(); //Se reinicia el conteo
                inicio = 0;
                authService._logOut();
                $location.path('/account/login');
            } else {
                init(); //Se reinicia el conteo
                history.push($location.$$path);
            }*/
        });

        $rootScope.back = function () {
            var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
            $location.path(prevUrl);
        };

        auth.hookEvents();

        //init();
    });
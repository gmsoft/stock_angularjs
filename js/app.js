// Modo estricto. Evita inconsitencias de codificación en código JavaScript
'use strict';
/*
stockApp es el Módulo principal de la aplicación
Los Modulos en AngularJs se componen de:
1) un nombre, la buena practica es lowerCamelCase (stockApp).

[
	Recuerda:
	 * Underscore:
	first_name, last_name, master_card, inter_city.

	* Camel Case:
	FirstName, LastName, MasterCard, InterCity.

	* JavaScript programmers tend to use camel case that starts with a lowercase letter:
	firstName, lastName, masterCard, interCity.
]

2)una lista de dependencias, que en este caso son los módulos de la aplicación
*/

angular.module('stockApp', ['ngRoute', 'accountModule', 'dashboardModule' , 'stockModule', 'mercadolibreModule']); 

// Módulos de la aplicación
angular.module('accountModule',['auth0']);
angular.module('dashboardModule',[]);
angular.module('stockModule',[]);
angular.module('mercadolibreModule',[]);

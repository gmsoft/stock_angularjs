// Modo Stricto. Evita inconsitencias de codificación
'use strict'; 

// Módulo principal de la aplicación
//Inyecta los modulos necesarios
angular.module('stockApp', ['ngRoute', 'accountModule', 'dashboardModule' , 'stockModule']); 

// Módulos de la aplicación
angular.module('accountModule',[]);
angular.module('dashboardModule',[]);
angular.module('stockModule',[]);

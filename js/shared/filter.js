'use strict';
var app = angular.module('stockApp')
.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
})
.filter('productCode', function(){
  return function(input, lowercase) {
    input = input || '';
    var out = input;
    if (lowercase) {
      out = out.toLowerCase();
    }
    return out;
  };
});

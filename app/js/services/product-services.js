// product-services.js
(function(){
	'use strict';
	var productService = angular.module('productService', ['ngResource']);

	productService.factory('product',['$resource', 
		function($resource){
				return $resource('data/products/:productId.json', {}, {});
		}]);
})();
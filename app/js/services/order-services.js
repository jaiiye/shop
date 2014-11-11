// order-services.js
(function(){
	'use strict';
	var orderService = angular.module('orderService', ['ngResource']);

	orderService.factory('orderView',['$resource', 
		function($resource){
				return $resource('data/:users/address/:id.json', {}, {});
		}]);
})();
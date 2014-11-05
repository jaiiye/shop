 // users-service.js
(function(){
	'use strict';
	var usersService = angular.module('usersService', ['ngResource']);
	usersService.factory('users', ['$resource', 
		function($resource){
			return $resource('data/product/:productId.json', {}, {
				'query': {method:'GET', params:{phoneId:'@id'}, isArray:true}
			});
		}]);
})();

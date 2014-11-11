// shopping-car-services.js
(function(){
	'use strict';
	var shoppingCarService = angular.module('shoppingCarService', ['ngResource']);

	shoppingCarService.factory('shoppingCar',['$resource', 
		function($resource){
			console.log('shopping data');
			return $resource('/data/users/:userId/shoppingCar/:productId.json', {productId:'shoppingCar'}, {
				// 'delete': {method:'GET', params:{userId:'', productId:''}, isArray:false},
				'query': {method:'GET', params:{userId:''}, isArray:true}
			});
		}]);
})();

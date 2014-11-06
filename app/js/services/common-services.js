// common-services.js
(function(){
	'use strict';
	var commonService = angular.module('commonService', ['ngResource']);

	commonService.factory('orderViewStates',['$resource', 
		function($resource){
				return $resource('data/common/address/states.json', {}, {});
		}]);
	commonService.factory('orderViewCities',['$resource', 
		function($resource){
				return $resource('data/common/address/cities/:id.json', {}, {});
		}]);
	commonService.factory('orderViewZones',['$resource', 
		function($resource){
				return $resource('data/common/address/zones/:id.json', {}, {});
		}]);
})();
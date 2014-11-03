// login-module.urgent.js
// 自定模型

(function () {

	'use strict';
	function Config($routeProvider) {
		$routeProvider.
			when('/',{templateUrl:'modules/home/home.html', controller:'loginCtrl', controllerAs:'user'}).
			when('/login', {templateUrl:'modules/login/login.html',controller:'loginCtrl',controllerAa:'login'}).
			when('/registe', {templateUrl:'modules/registe/registe.html', controller:'registeCtrl', controllerAs:'registe'}).
			otherwise('/');
	}
	Config.$inject = ['$routeProvider'];
	angular.module('loginModule',['ngRoute']);
	angular.module('loginModule').config(Config);

})();
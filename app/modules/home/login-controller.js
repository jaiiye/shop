// login-controller.js
(function(){
	'use strict';
	function LoginController(myservice){
		var vm = this;
	}

	LoginController.$inject = ['myservice'];
	angular.module('loginModule').controller('loginCtrl',LoginController);
})();
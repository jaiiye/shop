// login-controller.js
(function(){
	function loginControll($scope,$location) {

		console.log('login...');
		if($scope.loginCheckbox) {
			console.log('select auto login');
		}
		$scope.loginButton = function() {
			console.log('click login button');
			if($scope.username != 'john') {
				$scope.error_msg = '用户名错误';
				$scope.state = true;
				console.log('username',$scope.username);
			}
			if($scope.username === 'john') {
				$scope.state = false;
				console.log('username',$scope.username);
				if($scope.password === '123456') {
					console.log('password yes',$scope.password);
					$location.path('/home');
				}
				else {
					console.log('password wrong',$scope.password);
					$scope.error_msg = '密码错误';
					$scope.state = true;
				}
			}
		};

	}
	loginControll.$inject = ['$scope','$location'];
	angular.module('luna').controller('loginController',loginControll);
})();
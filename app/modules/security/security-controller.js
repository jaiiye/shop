// security-controller.js
(function(){
	function securityControll($scope, $locaton){
		console.log('security...');
		var password, vertify, flag3, flag4 = false;
		// 用户名判断是否是字母和数字组成
		$scope.checkname = function() {
			if(!isNumberOr_Letter($scope.username)){
				console.log('username',$scope.username);
				$scope.username_msg = '用户名必须是数字或字母组成';
			}
			else{
				console.log('username',$scope.username);
				$scope.username_msg = '';
			}
		};
		$scope.checkpassword = function() {

			if(isNull($scope.password)){
				$scope.password_msg = '密码不能为空';
			}
			else
				$scope.password_msg = '';
		};
		// 密码两次输入匹配判断
		$scope.checkpassword2 = function() {
			if(!isNull($scope.password2)){
				if($scope.password != $scope.password2) {
					console.log('password',$scope.password);
					console.log('password2',$scope.password2);
					$scope.password2_msg = '两次输入的密码密码不符';
				}
				else {
					console.log('password',$scope.password);
					console.log('password2',$scope.password2);
					$scope.password2_msg = 'YES';
					password = true;
				}
			}
			else
				$scope.password2_msg = '确认密码不能为空';
		};
		// 手机号码检查
		$scope.checkphone = function() {
			console.log('check phonenumber...');
			if(!isNull($scope.phonenumber)){
				if(!checkMobile($scope.phonenumber)){
					console.log('phonenumber error',$scope.phonenumber);
					$scope.phonenumber_msg = '手机号错误';
				}
				else{
					console.log('phonenumber yes',$scope.phonenumber);
					$scope.phonenumber_msg = '';
				}
			}
			else 
				$scope.phonenumber_msg = '手机号不能为空';
		};
		// 手机验证码检查
		$scope.checkvertifycode = function() {
			console.log('check checkvertifycode...');
			if($scope.vertifycode === '123456'){
				$scope.vertifycode_msg = '验证码正确';
				vertify = true;
			}
			else{
				$scope.vertifycode_msg = '验证码错误';
				vertify = false;
			}
		};
		$scope.button_msgvitefy = function() {
			console.log('message send...');
			alert('验证短信已经发送请查收');
		};
		// 注册
		$scope.apply = function() {
			console.log('click apply button');
			if(isNumberOr_Letter($scope.username) && password && checkMobile($scope.phonenumber) && vertify) {
				console.log('apply now...');
				$locaton.path('/login');
			}
			else{
				alert('填写信息为空或者有误，无法提交');
			}
		};
	}
	securityControll.$inject = ['$scope', '$location'];
	angular.module('luna').controller('securityController',securityControll);

})();
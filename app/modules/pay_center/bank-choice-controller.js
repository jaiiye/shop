// bank-choice-controller.js
(function(){
	angular.module('luna').controller('bankChoiceControlloer',config);
	function config($scope, bankList, $location){
		console.log('bankChoice...');
		$scope.userId='010001';
		$scope.orderNo = '0001000';
		$scope.bankRadio = '';
		$scope.fare=5.0;
		 $scope.bankForm = {};
		var Banks = bankList.get({},function(data){
			$scope.banks = data.bankList;
			console.log('data',data.bankList);
		});
		$scope.submit = function(){
			console.log('submit',$scope.bankRadio);
		};
		function TotalPrices(length){
			console.log('collection length',length);
			$scope.subPrice = 0.0;
			for(var i=0; i<length; i++){
				$scope.subPrice += ($scope.products[i].productPrice * $scope.products[i].quantity);
			}
		}
		function TotalQuantity(length){
			console.log('collection length',length);
			$scope.totalQuantity = 0.0;
			for(var i=0; i<length; i++){
				$scope.totalQuantity += $scope.products[i].quantity;
			}
		}
	}
	config.$inject = ['$scope','bankList','$location'];
})();
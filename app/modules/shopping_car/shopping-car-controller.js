(function(){
	console.log('shoppingCarController...');
	function ShoppingCar($scope, shoppingCar, $location){
		$scope.userId='010001';
		$scope.all_select_text = '全选';
		$scope.check = false;
		var a = $scope.items = shoppingCar.query({userId: $scope.userId}, function(data){
			TotalPrices(data.length);
		});
		$scope.allSelected = function(){
			console.log('all selected');
			$scope.check = true;
			$scope.checkBox = true;
			$scope.all_select_text = '';
			$scope.all_cancel_text = '取消';
			console.log('$scope.check',$scope.check);
			console.log('$scope.checkBox',$scope.checkBox);
		};
		$scope.allCanceled = function(){
			console.log('all canceled');
			$scope.check = false;
			$scope.checkBox = false;
			$scope.all_select_text = '全选';
			$scope.all_cancel_text = '';
			console.log('$scope.check',$scope.check);
			console.log('$scope.checkBox',$scope.checkBox);
		};
		$scope.delete = function(index,id){
			console.log('delete id',id);
			console.log('delete index',index);
			$scope.items.splice(index,1);
			TotalPrices($scope.items.length);
			// $scope.items = shoppingCar.delete({userId: $scope.userId, productId: id});
		};
		// $scope.checkOpreation = function(index){
		// 	console.log('checkBox',index);
		// 	$scope.checkBox;
		// 	console.log('$scope.checkBox',$scope.checkBox);
		// };
		$scope.checkQuantity = function(index){
			console.log('checkQuantity quantity',$scope.items[index].quantity);
			var quantity = $scope.items[index].quantity;
			if(isInteger(quantity)){
				$scope.items[index].showNumberError = false;
				TotalPrices($scope.items.length);
			}
			else
				$scope.items[index].showNumberError = true;
		};
		$scope.goOrder = function(){
			console.log('go order...');
			$location.path('/orderCheck');
		};
		function TotalPrices(length){
			console.log('collection length',length);
			$scope.totalProductPrice = 0.0;
			for(var i=0; i<length; i++){
				$scope.totalProductPrice += ($scope.items[i].productPrice * $scope.items[i].quantity);
			}
		}
	}
	ShoppingCar.$inject = ['$scope','shoppingCar', '$location'];
	angular.module('luna').controller('shoppingCarController',ShoppingCar);
})();
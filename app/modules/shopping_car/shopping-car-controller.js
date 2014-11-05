(function(){
	console.log('shoppingCarController...');
	function ShoppingCar($scope, shoppingCar){
		$scope.userId='010001';
		$scope.all_select_text = '全选';
		$scope.check = false;
		var a = $scope.items = shoppingCar.query({userId: $scope.userId}, function(data){
			TotalPrices(data.length);
		});
		$scope.allSelected = function(){
			console.log('all selected');
			$scope.check = true;
			$scope.checkop = true;
			$scope.all_select_text = '';
			$scope.all_cancel_text = '取消';
		};
		$scope.allCanceled = function(){
			console.log('all canceled');
			$scope.check = false;
			$scope.checkop = false;
			$scope.all_select_text = '全选';
			$scope.all_cancel_text = '';
		};
		$scope.delete = function(index,id){
			console.log('delete id',id);
			console.log('delete index',index);
			$scope.items.splice(index,1);
			TotalPrices($scope.items.length);
			// $scope.items = shoppingCar.delete({userId: $scope.userId, productId: id});
		};
		$scope.checkQuantity = function(index){
			console.log('checkQuantity quantity',$scope.items[index].quantity);
			TotalPrices($scope.items.length);
		};
		function TotalPrices(length){
			console.log('collection length',length);
			$scope.totalProductPrice = 0.0;
			for(var i=0; i<length; i++){
				$scope.totalProductPrice += ($scope.items[i].productPrice * $scope.items[i].quantity);
			}
		}
	}
	ShoppingCar.$inject = ['$scope','shoppingCar'];
	angular.module('luna').controller('shoppingCarController',ShoppingCar);
})();
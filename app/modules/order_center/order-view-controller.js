// order-view-controller.js
(function(){
	angular.module('luna').controller('orderViewControlloer',config);
	function config($scope, $resource, $location){
		console.log('orderView...');
		$scope.userId='010001';
		$scope.orderNo = '0001000';
		$scope.fare=5.0;
		getData();
		$scope.goPay = function(){
			console.log('order would be created');
			$location.path('/backChoice');
		};
		$scope.viewOrder = function(){
			console.log('go order view');
			$location.path('/orderView');
		};
		function checkInvoice(invoice) {
			if(invoice === '0') {
				$scope.invoiceHeadName = '';
				$scope.invoiceContent = '';
			}
			else{
				if(isNull($scope.invoiceContent) || isNull($scope.invoiceHeadName)|| typeof($scope.invoiceHeadName) == 'undefined' || typeof($scope.invoiceContent) == 'undefined') {
					$scope.invoiceHead = '0';
					$scope.invoiceHeadName = '';
					$scope.invoiceContent = '';
				}
			}

		}
		function getData() {
			var Data = $resource('/data/users/:userId/orders/:orderId.json',
				{userId:$scope.userId,orderId:'@id'},{});
			var data = Data.get({orderId:'001'}, function(){
				$scope.consignee = data.consignee;
				$scope.phoneNumber = data.phoneNumber;
				$scope.state = data.state;
				$scope.city = data.city;
				$scope.zone = data.zone;
				$scope.street = data.street;
				$scope.postNumber = data.postNumber;
				$scope.payWay = data.payWay;
				$scope.invoiceHead = data.invoiceHead;
				$scope.invoiceHeadName = data.invoiceHeadName;
				$scope.invoiceContent = data.invoiceContent;
				$scope.products = data.productList;
				TotalPrices($scope.products.length);
				TotalQuantity($scope.products.length);
			});
		}
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
	config.$inject = ['$scope','$resource','$location'];
})();
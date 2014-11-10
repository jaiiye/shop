// order-check-controller.js
(function(){
	angular.module('luna').controller('orderCheckControlloer',config);
	function config($scope, $resource, $location ,orderViewStates, orderViewCities, orderViewZones, shoppingCar){
		console.log('orderCheck...');
		$scope.userId='010001';
		$scope.fare=5.0;
		$scope.states = orderViewStates.query();
		$scope.products = shoppingCar.query({userId: $scope.userId}, function(data){
			TotalPrices(data.length);
			TotalQuantity(data.length);
		});
		$scope.addConsignee = function(){
			console.log('click add consignee');
			$scope.showInputArea = true;
		};
		$scope.getCities = function() {
			if(typeof($scope.selectState)!='undefined'){
				console.log($scope.selectState.id);
				$scope.cities = orderViewCities.query({id: $scope.selectState.id});
				$scope.showZone = false;
			}
		};
		$scope.getZones = function() {
			if(typeof($scope.selectCity)!='undefined'){
				console.log($scope.selectCity.id);
				$scope.zones = orderViewZones.query({id: $scope.selectCity.id});
				$scope.showZone = true;
			}
		};
		$scope.saveAddress =function() {
			$scope.showInputArea = false;
			console.log('click save address button');
			if(typeof($scope.selectState)!='undefined'){
				var address = {
					"addressId": $scope.items.length,
					"consignee": $scope.consignee,
					"contury": "中国",
					"state": $scope.selectState.name,
					"city": $scope.selectCity.name,
					"zone": $scope.selectZone.name,
					"street": $scope.street,
					"phoneNumber": $scope.phoneNumber,
					"postNumber": $scope.postNumber
				};
				console.log(address);
				$scope.items.push(address);
				}
		};
		$scope.delete = function(index){
			console.log('delete index',index);
			$scope.items.splice(index,1);
			$scope.showDeleteStatus = false;
		};
		$scope.showDelete = function(index,id){
			$scope.deleteIndex = index;
			$scope.addressId = id;
			console.log(index);
			$scope.showDeleteStatus = true;

		};
		$scope.submit = function(){
			console.log('submit...');
			checkInvoice($scope.invoiceHead);
			var form = {
				"address": $scope.addressId,
				"payWay": $scope.payWay,
				"invoiceHead": $scope.invoiceHead,
				"invoiceHeadName": $scope.invoiceHeadName,
				"invoiceContent": $scope.invoiceContent,
				"orderProductList": $scope.products
			};
			saveForm();
			console.log(form);
			$location.path('orderView');
		};
		function saveForm() {
			// var Orders = $resource('/data/users/:userId/orders/:orderId.json',
			// 	{userId:$scope.userId,orderId:'@id'},{
			// 		charge: {method:'POST',params:{charge:true}}
			// 	});
			// var orders = Orders.query(function() {
			// 	var order = orders[0];
			// 	console.log('before',order);
			// 	order.orderStatus = '3';
			// 	order.$save({orderId: order.orderId}, function(){
			// 		console.log('after',order);
			// 	});
			// });
		}
		function checkInvoice(invoice) {
			if(invoice === '0') {
				$scope.invoiceHeadName = '';
				$scope.invoiceContent = '';
			}
			else{
				if(isNull($scope.invoiceContent) || isNull($scope.invoiceHeadName)|| typeof($scope.invoiceHeadName) == 'undefined' || typeof($scope.invoiceContent) == 'undefined') {
					$scope.invoiceHead = '0';
				}
			}

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
		$scope.items = [
			{
				"addressId": "001",
				"consignee": "张三",
				"contury": "中国",
				"state": "北京",
				"city": "朝阳",
				"zone": "高碑店",
				"street": "高碑店新村",
				"phoneNumber": "18911056732",
				"postNumber": "123607"
			},
			{
				"addressId": "011",
				"consignee": "张四",
				"contury": "中国",
				"state": "北京",
				"city": "朝阳",
				"zone": "高碑店",
				"street": "高碑店新村",
				"phoneNumber": "18911056732",
				"postNumber": "123607"
			}
		];
	}
	config.$inject = ['$scope','$resource','$location','orderViewStates','orderViewCities', 'orderViewZones', 'shoppingCar'];
})();
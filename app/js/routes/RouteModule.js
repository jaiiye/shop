/*basicModule.js*/
(function (){
	'use strict';
	function Config($routeProvider){
		$routeProvider.when('/shangPinFenLei',{
			templateUrl:'modules/categories/shangPinFenLei.html'
		}).when('/home',{
			templateUrl:'modules/home/home.html'
		}).when('/login',{
			templateUrl:'modules/login/login.html'
		}).when('/login',{
			templateUrl:'modules/login/login.html'
		}).when('/orderSuccess',{
			templateUrl:'modules/order/order-succrss.html'
		}).when('/orderView',{
			templateUrl:'modules/order/order-view.html'
		}).when('/order',{
			templateUrl:'modules/order/order.html'
		}).when('/backChoice',{
			templateUrl:'modules/pay-center/bank_choice.html'
		}).when('/bankRule',{
			templateUrl:'modules/pay-center/bank_rule.html'
		}).when('/bankCheck.',{
			templateUrl:'modules/pay-center/bank_check.html'
		}).when('/detail',{
			templateUrl:'modules/product-detail/detail.html'
		}).when('/ratingSuccess',{
			templateUrl:'modules/rating/rating-success.html'
		}).when('/rating',{
			templateUrl:'modules/rating/rating.html'
		}).when('/registe',{
			templateUrl:'modules/registe/registe.html'
		}).when('/souSuoJieGuo',{
			templateUrl:'modules/search/souSuoJieGuo.html'
		}).when('/security',{
			templateUrl:'modules/security/security.html'
		}).when('/productService',{
			templateUrl:'modules/service/product-service.html'
		}).when('/service',{
			templateUrl:'modules/service/service.html'
		}).when('/shoppingCar',{
			templateUrl:'modules/shopping-car/shopping_car.html'
		});
	}
	 Config.$inject = ['$routeProvider'];
	 angular.module('RouteModule',['ngRoute']);
	 angular.module('RouteModule').config(Config);
})();
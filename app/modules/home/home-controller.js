// home-controller.js


//搜索按钮
(function (){
	//'use strict';
	function homePageController($location,homeService){
		var vm = this;

		vm.search = function (){
			if (typeof(vm.searchText) !== 'undefined' && vm.searchText !== '') {
				$location.url('/search');
			}
		};
		vm.searchClass = function (classId){
			$location.url('/category');
			console.log(classId);
		};
 													
		homeService.classify().then(function (classifyinit){
			vm.classifyinit = classifyinit ;
		}); 

		homeService.turnPictures().then(function (pictures) {
			vm.turnPictures = pictures;
		});
		homeService.Products().then(function (products){
			vm.products = products;
		});
		vm.interval = 3;
		vm.leave = function (){
			vm.interval = 3;
			console.log(vm.interval);
		};
		vm.skip = function (id){
			console.log(id);
		};

	}

	homePageController.$inject = ['$location', 'homeService'];
	angular.module('luna').controller('homePageCtrl', homePageController);
})();
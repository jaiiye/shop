// scrollImg-controller.js
angular.module('luna').controller('scrollImgController', 
	function ($scope) {
		console.log('scrollImgController...');
		// 设置轮播图图片间隔
		$scope.myInterval = 5000;
		// 轮播图数据初始化
		var slides = $scope.slides = [];
		// 添加轮播图源
		slides.push({ image: 'img/k.png', text: '跳楼大甩卖了' });
		slides.push({ image: 'img/mask.png', text: '放血大甩了' });
 });
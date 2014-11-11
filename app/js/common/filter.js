(function(){
	'use strict';
	angular.module('shopFilter',[]).
		filter('payWayFilter', function() {
			return function(input) {
				if(input === '0')
					return '在线支付';
				else if(input === '1')
					return '货到付款';
			};
		}).filter('invoiceHeadFilter', function() {
			return function(input) {
				if(input === '0')
					return '不开发票';
			};
		}).
		filter('invoiceContentFilter', function() {
			return function(input) {
				if(input === '0')
					return '明细';
				else if(input === '1')
					return '办公';
				else if(input === '2')
					return '图书';
			};
		});
})();
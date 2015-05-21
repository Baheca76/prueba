'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts =[
			{
				icon: 'glyphicon-user',
				collour:'bin-success',
				total:'20.408',
				descripton:'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-user',
				collour:'bin-success',
				total:'3.456',
				descripton:'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-user',
				collour:'bin-success',
				total:'20.408',
				descripton:'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-user',
				collour:'bin-success',
				total:'20.408',
				descripton:'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-user',
				collour:'bin-success',
				total:'20.408',
				descripton:'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-user',
				collour:'bin-success',
				total:'20.408',
				descripton:'TOTAL CUSTOMERS'
			}
		];     
	}
]);
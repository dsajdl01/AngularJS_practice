var myMngtHierarchyApp = angular.module('myMngtHierarchyApp', [
	'ngRoute',
	'ngResource',
	'ngMessages',
	'mgcrea.ngStrap'
	]);

myMngtHierarchyApp.config(['$routeProvider', function($routeProvider) {
	  $routeProvider

      // Add more views here for routing
	  .when('/homeViewAccount', {
		  templateUrl: 'js/views/selectedNodeInfo.html'
	  })
	  .when('/viewAccountInfo',{
	  	templateUrl: 'js/views/accountManagementHierarchyInfo.html'
	  })
	  .otherwise({redirectTo: '/homeViewAccount'})
	}]
);
var myMngtHierarchyApp = angular.module('myMngtHierarchyApp', [
	'toaster',
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
	  .when('/templateAssumeIdentity',{
	  	templateUrl: 'js/views/AssumeIdentityTemplate.html'
	  })
	  .otherwise({redirectTo: '/homeViewAccount'})
	}]
);
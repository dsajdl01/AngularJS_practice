fifaApp.controller('TeamDetailsCtrl', ['$location', '$routeParams', 'FifaService',
 			   			 function($location, $routeParams, FifaService){

 	var self = this;
 	self.team = {};
 	
 	FifaService.getTeamDetails($routeParams.code).then(function(response){
 		self.team = response.data;
 	},
 	function(error){
 		$location.path('/login');
 	});
}]);

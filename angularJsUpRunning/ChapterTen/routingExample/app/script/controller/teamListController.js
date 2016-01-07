fifaApp.controller('TeamListCtrl', ['FifaService', function(FifaService) {
	var self = this;
	self.teams = [];

	FifaService.getTeams().then(function(responce){
		self.teams = responce.data;
	});
}]);
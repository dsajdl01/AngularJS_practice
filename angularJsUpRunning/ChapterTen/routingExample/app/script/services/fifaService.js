fifaApp.factory('FifaService', ['$http', function($http){
	return {
		getTeams: function(){
			return $http.get('/api/team');
		},

		getTeamDetails: function(code){
			return $http.get('/api/team/' + code);
		}
	}
}]);
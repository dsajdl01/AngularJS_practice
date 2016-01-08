fifaApp.factory('FifaService', ['$http', function($http){
	return {
		getTeams: function(){
			return $http.get('/api/team');
		},

		getTeamsDetails: function(code){
			return $http.get('/api/team' + code);
		}
	}
}]);

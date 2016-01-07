fifaApp.controller('LoginCtrl',['UserService', '$location', function(UserService, $location){

	var self = this;
	self.user = {username: '', password: ''};
	
	self.login = function() {
		UserService.login(self.user).then(function(success){
			$location.path('/team');
		}, 
		function(error){
			self.errorMessage = error.data.msg;
		})
	};
}]);
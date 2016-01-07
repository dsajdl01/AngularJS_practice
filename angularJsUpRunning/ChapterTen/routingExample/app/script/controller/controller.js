fifaApp.controller('mainController', ['UserService', function(UserService){
	
	var self = this;
	self.userService = UserService;

	/* Check if the user is logged in when the app loads.
	User Service will automaticaly updete isLoggedIn after this call finishes. */
	UserService.session();
}]);
 
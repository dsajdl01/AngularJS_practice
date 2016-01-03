getHttpApp.controller('mainController', ['$http', function($http) {
	var self = this;
	self.text = 'getting data from http server'
	self.items = [];
	$http.get('https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/angularJsUpRunning/ChapterSix/my-api-notes.json').then(function(response) {
		console.log(response.data);
		self.items = response.data;
		}, function(errResponce){
			console.log('error');
			console.error('Error while fetching notes');
		});
}])
				
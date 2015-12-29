myExampleApp.factory('loadDataService', ['$http', function($http ) {
	return new LoadDataService($http);
}]);

function LoadDataService($http){ 

	var self = this;

	self.loadHTMLColorCode = function(callback){


		$http({
			url: 'https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/angularJsUpRunning/ChapterSix/my-api-notes.json',
			method: "GET",
			data: "{}"
		})
		.success(function(data){
			for(var i = 0; i < 100000; i++){
				for(var j = 0; j < 100000; j++){
					// this two for loops just delay execution method to display processing template.
				}
			}
			callback(data);
		})
		.error(function(data){
			console.log('error occure: ', data);
			callback(400);
		});

	}
};
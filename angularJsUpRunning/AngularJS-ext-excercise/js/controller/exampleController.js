
myExampleApp.controller('exampleController', [ '$scope', '$modal', 'loadDataService',
									  function($scope, $modal, loadDataService) {
  	var self = this;
  	self.showText = "Press button to show HTML colour code.";
  	self.btnName = "Display data";
  	self.process = false;
  	self.showContent = false;

	self.myModal = $modal({scope: $scope, title: 'Processing Data...', content: 'Please wait', templateUrl:'js/views/template.html', show: false});

	self.showModal = function(){
		console.log('show button is pressed');
		self.myModal.$promise.then(self.myModal.show);
		self.btnProccess = false;
		self.btnName = "Processing";
		self.items = "";

		loadDataService.loadHTMLColorCode(function(data){
				console.log(data);
				if(data == 400){
					console.log(400, 'run time error occur.');
				} 
				else {
					self.btnName = 'Done';
					self.myModal.$promise.then(self.myModal.hide);
					self.showContent = true;
					self.process = true;
					self.items = data;
					console.log(200, 'success');
				}
		});

			
	};	
}]);
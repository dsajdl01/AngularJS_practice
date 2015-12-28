
myExampleApp.controller('exampleController', [ '$scope', '$modal', 'loadDataService',
									  function($scope, $modal, loadDataService) {
  	var self = this;
  	self.showMe = "Hello David";
  	self.btnName = "Display data";

/*	var myModal = $modal({scope: $scope, title: 'Processing Data...', content: 'Please wait', templateUrl:'js/views/template.html', show: false});

	self.showModal = function(){
		console.log('show button is pressed');
		myModal.$promise.then(myModal.show);
		self.btnProccess = false;

			
	};

	self.hideModel = function(){
		console.log('Hide button is pressed');
		myModal.$promise.then(myModal.hide);
	};*/
  	 	
}]);
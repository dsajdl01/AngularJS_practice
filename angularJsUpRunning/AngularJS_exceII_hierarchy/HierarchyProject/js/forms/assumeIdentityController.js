myMngtHierarchyApp.controller('assumeIdentityController',['modalDialogBoxService',
	function(modalDialogBoxService) {
	
	var self = this;
	self.allPath = modalDialogBoxService.shareModalData.pathToEachNode;
	self.selectedNode = self.allPath[0];
	console.log(self.allPath, " in assumeIdentityController!!!");

}]);
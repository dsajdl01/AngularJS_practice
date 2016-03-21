myMngtHierarchyApp.factory('mngtHierarchyNodeServiceProvider',
	['hierarchyNodeService','commonNodeHeirarchyModel', 'modalDialogBoxService', 
		function(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService){
		return new mngtHierarchyNodeServiceProvider(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService);
}]);

function mngtHierarchyNodeServiceProvider(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService){
		var self = this;
	
		self.loadTopNode = function(callBack){
			console.log("calling init is running....");
			hierarchyNodeService.getSelectedNode(
			 	function(rootNode){
			 		commonNodeHeirarchyModel.rootNode = rootNode;
			 		console.log("in mng har node", commonNodeHeirarchyModel.rootNode);
			 		callBack(true);
			 	},
			 	function(fail){
			 		console.log("in mng har failer", fail);
			 		callBack(false);
			 	}

			);
		};

		self.displayAssumeDialogBox = function( path ){

			console.log(" nojjnsjak running.....");

			modalDialogBoxService.setTemplate("js/forms/assumeIdentityTemplate.html");

			modalDialogBoxService.shareModalData = {
				pathToEachNode: path
			};

			modalDialogBoxService.showDialog();
		}
}
	

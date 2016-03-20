myMngtHierarchyApp.factory('mngtHierarchyNodeServiceProvider',
	['hierarchyNodeService','commonNodeHeirarchyModel', 'modalDialogBoxService', 
		function(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService){
		return new mngtHierarchyNodeServiceProvider(hierarchyNodeService, commonNodeHeirarchyModel);
}]);

function mngtHierarchyNodeServiceProvider(hierarchyNodeService, commonNodeHeirarchyModel){
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

		self.displayAssumeDialogBox = function(){

		/*	modalDialogBoxService.setTemplate()*/
		}
}
	

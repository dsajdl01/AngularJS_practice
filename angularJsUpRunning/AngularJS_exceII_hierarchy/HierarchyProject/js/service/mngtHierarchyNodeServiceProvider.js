myMngtHierarchyApp.factory('mngtHierarchyNodeServiceProvider',
	['hierarchyNodeService','commonNodeHeirarchyModel', 'modalDialogBoxService', 
		function(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService){
		return new mngtHierarchyNodeServiceProvider(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService);
}]);

function mngtHierarchyNodeServiceProvider(hierarchyNodeService, commonNodeHeirarchyModel, modalDialogBoxService){
		var self = this;
	
		self.loadTopNode = function(callBack){
			hierarchyNodeService.getSelectedNode(
			 	function(rootNode){
			 		commonNodeHeirarchyModel.rootNode = rootNode;
			 		callBack(true);
			 	},
			 	function(fail){
			 		callBack(false);
			 	}

			);
		};

		self.displayAssumeDialogBox = function( path, callBack ){

			modalDialogBoxService.setTemplate("js/forms/assumeIdentityTemplate.html");

			modalDialogBoxService.shareModalData = {
				pathToEachNode: path
			};

			modalDialogBoxService.notify = function(selectedPath) {
                callBack(selectedPath);
            };

			modalDialogBoxService.showDialog();
		}
}
	

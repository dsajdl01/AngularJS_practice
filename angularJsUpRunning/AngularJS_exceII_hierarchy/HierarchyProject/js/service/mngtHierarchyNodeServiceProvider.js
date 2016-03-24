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
				var nodeName = selectedPath.split(">");
				getSelectedRootNode(commonNodeHeirarchyModel.rootNode[0], nodeName[nodeName.length - 1])
                callBack(nodeName[nodeName.length - 1]);
            };

			modalDialogBoxService.showDialog();
		}

		var getSelectedRootNode = function(topNode, name){
			console.log(name, topNode.name);
			if(topNode.name == name){
				commonNodeHeirarchyModel.selectedTopRoot = topNode
				return;
			} else {
				for(var i = 0; i < topNode.child.length; i ++){
					getSelectedRootNode(topNode.child[i], name);
				}
			}
		}
}
	

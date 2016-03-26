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
				console.log("fff", selectedPath);
				if(!selectedPath){
					callBack(selectedPath);
				}
				else
				{
					saveSelectedNode(selectedPath);
    	            callBack(getSelectedNodeName(selectedPath));
    	        }
            };
			modalDialogBoxService.showDialog();
		};


		var getSelectedNodeName = function(selectedPath){
			var nodeName = selectedPath.split(">");
			return nodeName[nodeName.length - 1];
		}


		var saveSelectedNode = function(selectedPath){
			for(var i = 0; i < commonNodeHeirarchyModel.allNodesDetails.length; i++){
				if(commonNodeHeirarchyModel.allNodesDetails[i].pathToNode == selectedPath){
					commonNodeHeirarchyModel.selectedTopRootNode = commonNodeHeirarchyModel.allNodesDetails[i];
					console.log("selectedTopRootNode: ", commonNodeHeirarchyModel.selectedTopRootNode)
					break;
				}
			}
		};
}
	

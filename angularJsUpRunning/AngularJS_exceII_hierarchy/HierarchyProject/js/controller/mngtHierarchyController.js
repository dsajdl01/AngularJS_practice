myMngtHierarchyApp.controller( 'mngtHierarchyController', ['hierarchyNodeService', 'commonNodeHeirarchyModel',
					function(hierarchyNodeService, commonNodeHeirarchyModel){
	
	var self = this;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.test = 'any content';

	self.init = function(){
		console.log("calling init is running....");
		hierarchyNodeService.getSelectedNode(
		 	function(rootNode){
		 		self.commonNodeHeirarchyModel.rootNode = rootNode;
		 		console.log("in mng har node", self.commonNodeHeirarchyModel.rootNode);
		 	},
		 	function(fail){
		 		console.log("in mng har failer", fail);
		 	}

		);
	};
	
}]);
myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel){
	
	var self = this;
	var path = {};
	var namePath = "";
	var topName;
	var firstNode = true;
	self.showPage = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.test = 'any content';

	self.init = function(){
		var isAssumeIdentity = false;
		var isNodeLoaded = false;
		var allPath = [];
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isAssumeIdentity = responce;
			console.log(isAssumeIdentity, commonNodeHeirarchyModel.rootNode[0].name);
			self.nodes  = getPathToNodes(commonNodeHeirarchyModel.rootNode[0], "", allPath);
			self.nodes.unshift("[Assume Identity]");
			console.log( self.selectedNode, "gdggdgd: ", self.nodes);
			mngtHierarchyNodeServiceProvider.displayAssumeDialogBox(self.nodes);
		});
		

	};

	var getPathToNodes = function(nodes, pathToParent, allPath){

		var pathToCurrentNode = pathToParent + (pathToParent.length == 0 ? "": ">") + nodes.name
		allPath.push(pathToCurrentNode);
		for(var i = 0; i < nodes.child.length; i++){
			getPathToNodes(nodes.child[i], pathToCurrentNode, allPath);
		}
		return allPath;
	}
	
}]);
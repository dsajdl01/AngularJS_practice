myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel){
	
	var self = this;
	var path = {};
	var namePath = "";
	var topName;
	var firstNode = true;
	self.pageIsLoaded = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.test = 'any content';

	self.init = function(){
		var isAssumeIdentity = false;
		var isNodeLoaded = false;
		var allPath = [];
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isAssumeIdentity = responce;
			self.nodes  = getPathToNodes(commonNodeHeirarchyModel.rootNode[0], "", allPath);
			self.nodes.unshift("[Assume Identity]");
			mngtHierarchyNodeServiceProvider.displayAssumeDialogBox(self.nodes, function(selectedNode){
				var nodeName = selectedNode.split(">")
				self.accountTitle = nodeName[nodeName.length - 1];
				self.pageIsLoaded = true;
			});
			
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
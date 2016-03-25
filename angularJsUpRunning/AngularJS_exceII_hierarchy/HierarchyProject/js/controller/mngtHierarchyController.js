myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel){

	var self = this;
	self.showPage = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.commonNodeHeirarchyModel.allNodesDetails = [];

	self.init = function(){
		var isAssumeIdentity = false;
		var isNodeLoaded = false;
		self.showPage = false;
		var allPath = [];
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isNodeLoaded = responce;
			var nodes  = getPathToNodes(commonNodeHeirarchyModel.rootNode[0], "", allPath);
			nodes.unshift("[Assume Identity]");
			mngtHierarchyNodeServiceProvider.displayAssumeDialogBox(nodes, function(selectedNodeName){
				self.accountTitle = selectedNodeName;
				isAssumeIdentity = true;
				canPageBeDisplayed(isNodeLoaded, isAssumeIdentity);
			});
			
		});
	};

	self.loadPage = function(){
		self.showPage = false;
		self.init();
	}

	var getPathToNodes = function(nodes, pathToParent, allPath){

		var pathToCurrentNode = pathToParent + (pathToParent.length == 0 ? "": ">") + nodes.name
		allPath.push(pathToCurrentNode);
		nodes.pathToNode = pathToCurrentNode;
		self.commonNodeHeirarchyModel.allNodesDetails.push(nodes); 
		for(var i = 0; i < nodes.child.length; i++){
			getPathToNodes(nodes.child[i], pathToCurrentNode, allPath);
		}
		return allPath;
	}

	var canPageBeDisplayed = function(isNodeLoaded, isAssumeIdentity){
		self.showPage = isNodeLoaded && isAssumeIdentity
	}
	
	self.displayAboutDialog = function(){
		console.log("about link is press ... ")
	}
}]);
myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel', '$location', 'toaster',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel, $location, toaster){

	var self = this;
	var isNodeLoaded = false;
	self.showPage = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.commonNodeHeirarchyModel.allNodesDetails = [];
	self.accountTitle = "";

	self.init = function(){
		var isAssumeIdentity = false;
		isNodeLoaded = false;
		self.showPage = false;
		$location.path('/homeViewAccount');
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isNodeLoaded = responce;
			if(isNodeLoaded){
				self.getAssumeIdentityDialogBox();
			} else {
		 		toaster.pop("error","Error occer while app was downloading data.");

			}
		});
	};

	self.getAssumeIdentityDialogBox = function(){
		var allPath = [];
		var nodes  = getAllPathToNodes(commonNodeHeirarchyModel.rootNode[0], "", []);
			nodes.unshift("[Assume Identity]");
			mngtHierarchyNodeServiceProvider.displayAssumeDialogBox(nodes, function(selectedNodeName){
				if(selectedNodeName == false){
					$location.path('/templateAssumeIdentity');
				} else {
					self.accountTitle = "Profile of " +selectedNodeName;
				}
				isAssumeIdentity = true;
				canPageBeDisplayed(isNodeLoaded, isAssumeIdentity);
			});
	}

	self.loadPage = function(){
		self.showPage = false;
		$location.path('/homeViewAccount');
		self.getAssumeIdentityDialogBox();
	}

	var getAllPathToNodes = function(nodes, pathToParent, allPath){

		var pathToCurrentNode = pathToParent + (pathToParent.length == 0 ? "": ">") + nodes.name
		allPath.push(pathToCurrentNode);
		nodes.pathToNode = pathToCurrentNode;
		self.commonNodeHeirarchyModel.allNodesDetails.push(nodes); 
		for(var i = 0; i < nodes.child.length; i++){
			getAllPathToNodes(nodes.child[i], pathToCurrentNode, allPath);
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
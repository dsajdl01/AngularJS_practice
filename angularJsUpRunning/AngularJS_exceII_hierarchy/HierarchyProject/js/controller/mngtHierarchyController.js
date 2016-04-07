myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel', '$location', 'toaster',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel, $location, toaster){

	var self = this;
	var isNodeLoaded = false;
	self.showPage = false;
	self.isDisabled = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.commonNodeHeirarchyModel.allNodesDetails = [];
	self.accountTitle = "";
	self.data = new Date();

	self.init = function(){
		var isAssumeIdentity = false;
		isNodeLoaded = false;
		self.showPage = false;
		self.isDisabled = false;
		console.log("self.isDisabled: ", self.isDisabled);
		$location.path('/homeViewAccount');
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isNodeLoaded = responce;
			mngtHierarchyNodeServiceProvider.loadNodeDetails(function(responce){
			});
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
					self.isDisabled = selectedNodeName;
					console.log("self.isDisabled in responce: ", self.isDisabled);
					self.accountTitle = "";
					$location.path('/templateAssumeIdentity');
				} else {
					self.isDisabled = true;
					console.log("self.isDisabled in responce: ", self.isDisabled);
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
	};

	var canPageBeDisplayed = function(isNodeLoaded, isAssumeIdentity){
		self.showPage = isNodeLoaded && isAssumeIdentity;
	};
	
	self.displayAboutDialog = function() {
		mngtHierarchyNodeServiceProvider.displayAboutDialogBox();
	};

}]);
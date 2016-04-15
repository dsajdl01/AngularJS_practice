myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel', '$location', 'toaster',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel, $location, toaster){

	var self = this;
	var isNodeLoaded = false;
	self.showPage = false;
	self.isTopNavigationBtnDisabled = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.accountTitle;
	self.data = new Date();

	self.init = function()
	{
		var isAssumeIdentity = false;
		isNodeLoaded = false;
		self.showPage = false;
		self.isTopNavigationBtnDisabled = false;
		relocatePageToHomePage();
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isNodeLoaded = responce;
			mngtHierarchyNodeServiceProvider.loadNodeDetails(function(responce){});
			if(isNodeLoaded)
			{
				self.getAssumeIdentityDialogBox();
			} else 
			{
		 		toaster.pop("error","Error occer while app was downloading data.");
			}
		});
	};

	self.getAssumeIdentityDialogBox = function()
	{	
		var nodes  = getAllPathToEachNode(commonNodeHeirarchyModel.rootNode[0], "", []);
			nodes.unshift("[Assume Identity]");
			mngtHierarchyNodeServiceProvider.displayAssumeDialogBox(nodes, function(selectedNodeName)
			{
				if(selectedNodeName == false)
				{
					self.isTopNavigationBtnDisabled = selectedNodeName;
					self.accountTitle = "";
				} else
				{
					self.isTopNavigationBtnDisabled = true;
					self.accountTitle = "Profile of " +selectedNodeName;
				}
				isAssumeIdentity = true;
				canPageBeDisplayed(isNodeLoaded, isAssumeIdentity);
			});
	};

	self.loadPage = function()
	{
		self.showPage = false;
		self.getAssumeIdentityDialogBox();
	};

	self.displayAboutDialog = function() 
	{
		mngtHierarchyNodeServiceProvider.displayAboutDialogBox();
	};

	var getAllPathToEachNode = function(nodes, pathToParent, allPath)
	{
		var pathToCurrentNode = pathToParent + (pathToParent.length == 0 ? "": ">") + nodes.name
		allPath.push(pathToCurrentNode);
		nodes.pathToNode = pathToCurrentNode;
		self.commonNodeHeirarchyModel.allNodesDetails.push(nodes); 
		for(var i = 0; i < nodes.child.length; i++)
		{
			getAllPathToEachNode(nodes.child[i], pathToCurrentNode, allPath);
		}
		return allPath;
	};

	var canPageBeDisplayed = function(isNodeLoaded, isAssumeIdentity)
	{
		self.showPage = isNodeLoaded && isAssumeIdentity;
	};

	var relocatePageToHomePage = function()
	{
		$location.path('/homeViewAccount');
	};
}]);
myMngtHierarchyApp.factory('commonNodeHeirarchyModel',[ function(){
	return new commonNodeHeirarchyModel();
}]);

function commonNodeHeirarchyModel(){
	var self = this;
	self.rootNode = {};
	self.nodesDetails = {};
	self.selectedTopNode =  {};
	self.allNodesDetails = {};
}
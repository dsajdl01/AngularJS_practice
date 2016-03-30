myMngtHierarchyApp.controller('nodeController',[ 'commonNodeHeirarchyModel','mngtHierarchyNodeServiceProvider',
		function(commonNodeHeirarchyModel, mngtHierarchyNodeServiceProvider){

			var self = this;
			var commonNodeHeirarchyModel = commonNodeHeirarchyModel;
			var userSelectedNodeDetails;
			self.assumedNode = "";

			self.init = function(){
				self.assumedNode = commonNodeHeirarchyModel.selectedTopNode;
				userSelectedNodeDetails = getNodesDetails(self.assumedNode.id)
				self.titleOfNode = self.assumedNode.name;
				self.numberOfChild = (!commonNodeHeirarchyModel.userSelectedNode.child.length)? 0 : commonNodeHeirarchyModel.userSelectedNode.child.length;
				 console.log("chm_usn" , commonNodeHeirarchyModel.userSelectedNode.name);
				console.log("dir: ", self.assumedNode, self.assumedNode.name, userSelectedNodeDetails);
	
			}

			self.userSelectedNode = function(node){
				commonNodeHeirarchyModel.userSelectedNode = node;
				userSelectedNodeDetails = getNodesDetails(node.id);
				self.titleOfNode = node.name;
				self.numberOfChild = (!node.child.length)? 0 : node.child.length;
				 console.log(node, node.child.length, " <> ", userSelectedNodeDetails);
			};		

			var getNodesDetails = function(nodeId){
				return mngtHierarchyNodeServiceProvider.getSelectedNodeDetails(nodeId);
			}	
			
}]);
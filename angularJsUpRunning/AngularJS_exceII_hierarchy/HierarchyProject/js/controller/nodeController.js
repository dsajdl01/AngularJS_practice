myMngtHierarchyApp.controller('nodeController',[ 'commonNodeHeirarchyModel','mngtHierarchyNodeServiceProvider',
		function(commonNodeHeirarchyModel, mngtHierarchyNodeServiceProvider){

			var self = this;
			self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
			var userSelectedNodeDetails;
			self.assumedNode = "";

			self.init = function(){
				self.assumedNode = self.commonNodeHeirarchyModel.selectedTopNode;
				userSelectedNodeDetails = getNodesDetails(self.commonNodeHeirarchyModel.userSelectedNode.id);
				self.titleOfNode = self.assumedNode.name;
				self.numberOfChild = getChildMessage(self.commonNodeHeirarchyModel.userSelectedNode);
				self.profesionInfo = getProfesionMessage(self.commonNodeHeirarchyModel.userSelectedNode, userSelectedNodeDetails);
				self.workSince = getWorkMessage(self.commonNodeHeirarchyModel.userSelectedNode, userSelectedNodeDetails);
				self.commensData = userSelectedNodeDetails.comments;
				self.detailsTitle = self.commonNodeHeirarchyModel.userSelectedNode.name + " comments:";	
			}

			self.userSelectedNode = function(node){
				self.commonNodeHeirarchyModel.userSelectedNode = node;
				userSelectedNodeDetails = getNodesDetails(node.id);
				self.titleOfNode = node.name;
				self.numberOfChild = getChildMessage(node);
				self.profesionInfo = getProfesionMessage(node, userSelectedNodeDetails);
				self.workSince = getWorkMessage(node, userSelectedNodeDetails);
				self.commensData = userSelectedNodeDetails.comments; 
				self.detailsTitle = node.name + " comments:";
			};		

			var getNodesDetails = function(nodeId){
	//			console.log(nodeId);
				return mngtHierarchyNodeServiceProvider.getSelectedNodeDetails(nodeId);
			}	
			
			var getChildMessage = function(child){
				if(!child.child.length){
					return child.name + " does not have any child."
				} else if (child.child.length == 1 ) {
					return child.name + " has 1 child."
				} else {
					return child.name + " has " + child.child.length + " childern."
				}
			}
			var getWorkMessage = function(child, details){
				return child.name + " has been working for our company since " + details.start;
			}

			var getProfesionMessage = function(child, details){
				return child.name + " works as " + details.possition + "."
			}
}]);
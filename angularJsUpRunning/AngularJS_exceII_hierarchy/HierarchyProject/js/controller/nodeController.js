myMngtHierarchyApp.controller('nodeController',[ 'commonNodeHeirarchyModel','mngtHierarchyNodeServiceProvider',
		function(commonNodeHeirarchyModel, mngtHierarchyNodeServiceProvider){

			var self = this;
			self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
			var userSelectedNodeDetails;
			self.assumedNode = "";

			self.init = function(){
				self.assumedNode = self.commonNodeHeirarchyModel.selectedTopNode;
				initializeViewVariables(self.assumedNode, getNodesDetails(self.commonNodeHeirarchyModel.userSelectedNode.id))
			}

			self.validateNewNodeName = function(newNodeName){
				console.log("validateNewNodeName: ", newNodeName);
				return true;
			}
			self.updateSelectedNodeName = function(newName){
				console.log("updateSelectedNodeName: ", newName);
			}

			self.userSelectedNode = function(node){
				self.commonNodeHeirarchyModel.userSelectedNode = node;
				initializeViewVariables(node, getNodesDetails(node.id));
			};		
			
			var initializeViewVariables = function(node, details){
				console.log("aditable: ", self.assumedNode.name, " <and> ", self.assumedNode.id);
				self.titleOfNode = node.name;
				self.numberOfChild = getChildMessage(node);
				self.profesionInfo = getProfesionMessage(node, details);
				self.workSince = getWorkMessage(node, details);
				self.commensData = details.comments; 
				self.detailsTitle = node.name + " comments:";
			}

			var getNodesDetails = function(nodeId){
				return mngtHierarchyNodeServiceProvider.getSelectedNodeDetails(nodeId);
			}

			var getChildMessage = function(child){
				if(!child.child.length){
					return child.name + " does not have any child.";
				} else if (child.child.length == 1 ) {
					return child.name + " has 1 child.";
				} else {
					return child.name + " has " + child.child.length + " childern.";
				}
			}

			var getWorkMessage = function(child, details){
				return child.name + " has been working for our company since " + details.start;
			}

			var getProfesionMessage = function(child, details){
				return child.name + " works as " + details.possition + "."
			}
}]);
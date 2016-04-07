myMngtHierarchyApp.controller('nodeController',[ 'commonNodeHeirarchyModel','mngtHierarchyNodeServiceProvider',
		function(commonNodeHeirarchyModel, mngtHierarchyNodeServiceProvider){

			var self = this;
			self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
			var userSelectedNodeDetails;
			var parentNode = {};
			self.assumedNode = "";
			self.init = function(){
				self.assumedNode = self.commonNodeHeirarchyModel.selectedTopNode;
				initializeViewVariables(self.commonNodeHeirarchyModel.userSelectedNode, getNodesDetails(self.commonNodeHeirarchyModel.userSelectedNode.id))
			}

			self.editingStart = function(node){
				console.log("EditingStart node: ", node);
				self.commonNodeHeirarchyModel.editingNode = node;

			}

			self.validateNewNodeName = function(newNodeName){
				setParentNodeById( self.commonNodeHeirarchyModel.rootNode[0], self.commonNodeHeirarchyModel.userSelectedNode.parentsId);
				
				if(newNodeName.length == 0){
					return {valid:false, message: "Please supply a name"}
				}

				if(newNodeName == self.commonNodeHeirarchyModel.userSelectedNode.name){
					return {valid:true, message:""};
				}
				
				var invalidChar = "\\/|:;,.<>";
				if(new RegExp("^.*[" + invalidChar + "].*$").test(newNodeName)){
					return {valid:false, message: "Cannot contain characters: " + invalidChar};
				}

				if(siblingExistWithSameName(newNodeName)){
					return {valid:false, message:"The name is already in use"};
				}

				return {valid:true, message:""};
			}

			var siblingExistWithSameName = function(newName){
				if(parentNode){
					if(parentNode.child){
						for(var i = 0; i < parentNode.child.length; i++){
							if(parentNode.child[i].name == newName){
								return true;
							}
						}
					}
				}
				return false;
			}

			var setParentNodeById = function(nodes, nodeId){
				for(var i = 0; i < nodes.child.length; i++){
					setParentNodeById(nodes.child[i], nodeId);
					if(nodes.id == nodeId) {
						parentNode = nodes
						break;
					}
				}
			}


			self.updateSelectedNodeName = function(newName){
				console.log("updateSelectedNodeName: ", newName);
				self.commonNodeHeirarchyModel.editingNode.name = newName;
				self.commonNodeHeirarchyModel.userSelectedNode.name = newName;
				initializeViewVariables(self.commonNodeHeirarchyModel.userSelectedNode, getNodesDetails(self.commonNodeHeirarchyModel.userSelectedNode.id));
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
			};

			var copyNodeProperties = function(source, destination){
				self.commonNodeHeirarchyModel.editingNode 

			}
}]);
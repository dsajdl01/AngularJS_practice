myMngtHierarchyApp.controller('nodeController',[ 'commonNodeHeirarchyModel','mngtHierarchyNodeServiceProvider',
		function(commonNodeHeirarchyModel, mngtHierarchyNodeServiceProvider){

			var self = this;
			self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
			var userSelectedNodeDetails;
			var parentNode = {};
			var highestId = self.commonNodeHeirarchyModel.selectedTopNode.id;
			self.assumedNode = "";
			self.init = function(){
				self.assumedNode = self.commonNodeHeirarchyModel.selectedTopNode;
				setHighestId(self.commonNodeHeirarchyModel.rootNode[0]);
				initializeViewVariables(self.commonNodeHeirarchyModel.userSelectedNode, getNodesDetails(self.commonNodeHeirarchyModel.userSelectedNode.id))
			}

			self.deleteNode = function(nodeToDelete) {
				console.log("delening node: ", nodeToDelete);
				//some code here
			}

			self.createNewChildNodeForUserToEdit = function(parent){
				var newNode = {"name": "", "id": -1, "parentsId": parent.id, "child": [] };
				parent.child.push(newNode);
			}

			self.editingStart = function(node){
				self.commonNodeHeirarchyModel.editingNode = node;

			}

			self.validateNewNodeName = function(newNodeName){
				
				if(newNodeName.length == 0){
					return {valid:false, message: " Please supply a name"};
				}

				if(newNodeName == self.commonNodeHeirarchyModel.userSelectedNode.name){
					return {valid:true, message:""};
				}
				
				var invalidChar = "\\/|:;,.<>";
				if(new RegExp("^.*[" + invalidChar + "].*$").test(newNodeName)){
					return {valid:false, message: " Cannot contain characters: " + invalidChar.split("").join("  ")};
				}

				if(siblingExistWithSameName(newNodeName)){
					return {valid:false, message:" The name is already in use"};
				}

				return {valid:true, message:""};
			}

			var siblingExistWithSameName = function(newName){
				var parentsId = (self.commonNodeHeirarchyModel.userSelectedNode.parentsId == null)? self.commonNodeHeirarchyModel.editingNode.parentsId : self.commonNodeHeirarchyModel.userSelectedNode.parentsId;
				setParentNodeById( self.commonNodeHeirarchyModel.rootNode[0], parentsId);
				if(parentNode){
					if(parentNode.child){
						for(var i = 0; i < parentNode.child.length; i++){
							if(parentNode.child[i].name == newName) {
								return true;
							}
						}
					}
				}
				return false;
			}

			var setHighestId = function(nodes){
				if(highestId < nodes.id){
					highestId = nodes.id;
				}
				for(var i = 0; i < nodes.child.length; i++){
					setHighestId(nodes.child[i]);
				}
			}

			var setParentNodeById = function(nodes, nodeId) {
				for(var i = 0; i < nodes.child.length; i++){
					setParentNodeById(nodes.child[i], nodeId);
					if(nodes.id == nodeId) {
						parentNode = nodes
						break;
					}
				}
			}


			self.updateSelectedNodeName = function(newName){
				if(self.commonNodeHeirarchyModel.editingNode.id == -1){
					highestId ++;
					var nodeDetails = {"id": highestId, "dob": "", "start": getCurrentDate() ,"possition": "Not defined","comments": "N/A"};
					self.commonNodeHeirarchyModel.nodesDetails.push(nodeDetails);
					self.commonNodeHeirarchyModel.editingNode.id = highestId;
					self.commonNodeHeirarchyModel.editingNode.name = newName;
				} else 
				{
					self.commonNodeHeirarchyModel.editingNode.name = newName;
					self.commonNodeHeirarchyModel.userSelectedNode.name = newName;
					initializeViewVariables(self.commonNodeHeirarchyModel.userSelectedNode, getNodesDetails(self.commonNodeHeirarchyModel.userSelectedNode.id));
				}
			}

			var getCurrentDate = function(){
				var d = new Date();
   		     	var month = '' + (d.getMonth() + 1);
        		var day = '' + d.getDate();
        		var year = d.getFullYear();
        		if (month.length < 2) month = '0' + month;
    			if (day.length < 2) day = '0' + day;
        		return day+"/"+month+"/"+year;
			}

			self.userSelectedNode = function(node){
				self.commonNodeHeirarchyModel.userSelectedNode = node;
				initializeViewVariables(node, getNodesDetails(node.id));
			};		
			
			var initializeViewVariables = function(node, details){
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
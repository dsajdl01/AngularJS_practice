myMngtHierarchyApp.controller( 'mngtHierarchyController', ['mngtHierarchyNodeServiceProvider', 'commonNodeHeirarchyModel',
					function(mngtHierarchyNodeServiceProvider, commonNodeHeirarchyModel){
	
	var self = this;
	var path = {};
	var namePath = "";
	var topName;
	var firstNode = true;
	self.showPage = false;
	self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;
	self.test = 'any content';
	self.nodes = { 
		repeatSelect: null,
		availableOptions:[
								 	{
											id: 1,
											name: 'First note',
											done: false,	
											someRandom: 31431
								      },
									  {
											id: 2,
											name: 'Second note',
											done: false
									  },
								  	  {
											id: 3,
											name: 'Finishes Third Note',
											done: true
									   } ]
						};
	self.init = function(){
		var isAssumeIdentity = false;
		var isNodeLoaded = false;
		mngtHierarchyNodeServiceProvider.loadTopNode(function(responce){
			isAssumeIdentity = responce;
			console.log(isAssumeIdentity, commonNodeHeirarchyModel.rootNode[0].name);
			var pptt = getPathToNodes(commonNodeHeirarchyModel.rootNode[0]);
			console.log("gdggdgd: ",pptt);
		});
		// mngtHierarchyNodeServiceProvider.displayAssumeDialogBox();
	};

	var getPathToNodes = function(nodes){

		namePath += nodes.name+"/";

		for(var i = 0; i < nodes.child.length; i++){
			//console.log(nodes.child[i]);
/*			if(i == 0){
				namePath +="XXX";
			}*/
			console.log(">>>>-",nodes.child[i].name , (!nodes.child[i].child[0]));
			if(nodes.child[i].child[0]){
				namePath += "false/";
			} else {
				namePath += "true/";
			}
			//namePath += "/" + nodes.child[i].name + "_" +i + " "; 
			//path[i] = topName + "/" + nodes.child[i].name;
			getPathToNodes(nodes.child[i]); 
		}
		return namePath;
	}
	
}]);
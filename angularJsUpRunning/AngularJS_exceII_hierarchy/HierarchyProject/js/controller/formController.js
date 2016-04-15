#myMngtHierarchyApp.controller('formController', [ 'commonNodeHeirarchyModel', 'mngtHierarchyNodeServiceProvider', '$scope', 'toaster',
	function(commonNodeHeirarchyModel, mngtHierarchyNodeServiceProvider, $scope, toaster){

		var self = this; 
		self.commonNodeHeirarchyModel = commonNodeHeirarchyModel;

		$scope.$watch(
			function()
			{
				return self.commonNodeHeirarchyModel.userSelectedNode;
			},
			function()
			{
				var nodeDetails = mngtHierarchyNodeServiceProvider.getSelectedNodeDetails(self.commonNodeHeirarchyModel.userSelectedNode.id);
				initializeViewVariables(nodeDetails);
			}
		);

		var initializeViewVariables = function(nodeDetails)
		{
			self.startDay = nodeDetails.start;
			self.position = nodeDetails.possition;
			self.comment = nodeDetails.comments;
		};

		self.save = function(newDetails)
		{
			for(var i = 0; i < commonNodeHeirarchyModel.nodesDetails.length; i++)
			{
				if(commonNodeHeirarchyModel.nodesDetails[i].id == self.commonNodeHeirarchyModel.userSelectedNode.id)
				{
					commonNodeHeirarchyModel.nodesDetails[i].start = self.startDay;
					commonNodeHeirarchyModel.nodesDetails[i].possition = self.position;
					commonNodeHeirarchyModel.nodesDetails[i].comments = self.comment;
					toaster.pop("success","The data was successfully saved.");
				}
			}
		};
}]);

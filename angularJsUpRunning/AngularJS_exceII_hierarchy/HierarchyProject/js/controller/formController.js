myMngtHierarchyApp.controller('formController', [ 'commonNodeHeirarchyModel', 'mngtHierarchyNodeServiceProvider', '$scope', 'toaster',
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
			self.btnSave = true;
			self.btnName = "Save"
			self.startDay = nodeDetails.start;
			self.position = nodeDetails.possition;
			self.comment = nodeDetails.comments;
			seveOrigineValues();
		};

		self.makeChange = function()
		{
			self.btnName = "Save";
			self.btnSave = areValuesSameAsOrigineValues();
		}
		var seveOrigineValues = function()
		{
			self.origineStartDay = self.startDay;
			self.OriginePosition = self.position;
			self.OriginComment = self.comment;
		}

		var areValuesSameAsOrigineValues = function()
		{
			return self.startDay == self.origineStartDay && self.position == self.OriginePosition &&  self.comment == self.OriginComment;
		}

		self.save = function()
		{
			for(var i = 0; i < commonNodeHeirarchyModel.nodesDetails.length; i++)
			{
				if(commonNodeHeirarchyModel.nodesDetails[i].id == self.commonNodeHeirarchyModel.userSelectedNode.id)
				{
					self.btnSave = true;
					self.btnName = "Done";
					commonNodeHeirarchyModel.nodesDetails[i].start = self.startDay;
					commonNodeHeirarchyModel.nodesDetails[i].possition = self.position;
					commonNodeHeirarchyModel.nodesDetails[i].comments = self.comment;
					seveOrigineValues();
					toaster.pop("success","The data was successfully saved.");
				}
			}
		};
}]);

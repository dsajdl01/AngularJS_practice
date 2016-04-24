describe('Controller: nodeController', function() {
	
	var ctrl, commonNodeHeirarchyModelMock, mngtHierarchyProviderMock, windowMock, calculateTimeMock;

	var selectedNode = [{"name": "Bob", "id": 101,"parentsId": 100,
						"child": [{"name": "David","id": 106,"parentsId": 105,"child": []}]}];

	var detailsNode = [{"id": 101, "dob": "28/02/1976","start": "10/02/2005",
			"possition": "Senior Developer","comments": "Work with smile in our company."},
	 		{"id": 106, "dob": "20/10/1979","start": "10/02/2006","possition": "Junior Developer",
	 							"comments": "Concentrate on AngulaJS, Java and REST Full services."}];

	beforeEach(module('myMngtHierarchyApp'));

	beforeEach(module(function($provide)
	{
		commonNodeHeirarchyModelMock = {
			selectedTopNode: selectedNode[0],
			rootNode: selectedNode,
			userSelectedNode: selectedNode[0].child[0]
		};

		mngtHierarchyProviderMock = {
			getSelectedNodeDetails: function(nodeId){
				return detailsNode[1];
			}
		};

		calculateTimeServiceMock = {
			getCurrentDate: function(){
				return "25/04/2016";
			}
		};

		windowMock = {
            confirm: function(message) {
                return userPromptResult;
            }
        };

		$provide.value('commonNodeHeirarchyModel', commonNodeHeirarchyModelMock);
		$provide.value('mngtHierarchyNodeServiceProvider', mngtHierarchyProviderMock);
		$provide.value('calculateTimeService', calculateTimeServiceMock);
		$provide.value('$window', windowMock);
	}));

	beforeEach(inject(function($controller)
	{
        ctrl = $controller('nodeController');
    }));

	it('should be defined - Controller', function()
    {
        expect(ctrl).toBeDefined();
    });

    it('should initialize instance variables when ini() is called', function(){
    	ctrl.init();
    	expect(ctrl.titleOfNode).toEqual("David");
		expect(ctrl.numberOfChild).toEqual("David does not have any child.");
		expect(ctrl.profesionInfo).toEqual("David works as Junior Developer.");
		expect(ctrl.workSince).toEqual("David has been working for our company since 10/02/2006");
		expect(ctrl.commensData).toEqual("Concentrate on AngulaJS, Java and REST Full services.");
		expect(ctrl.detailsTitle).toEqual("David comments:");
    });

    it('should delete node from top root when deleteNode() is called', function(){
    	userPromptResult = true;
   		spyOn(ctrl, 'removeNodesFromTree').and.callThrough();

    	ctrl.deleteNode(selectedNode[0].child[0]);
    	expect(ctrl.removeNodesFromTree).toHaveBeenCalled();
    });

    it('should delete node from top root when deleteNode() is called and user approved is true', function(){
    	userPromptResult = true;
   		spyOn(ctrl, 'removeNodesFromTree').and.callThrough();
   		
    	ctrl.deleteNode(selectedNode[0].child[0]);
    	expect(ctrl.removeNodesFromTree).toHaveBeenCalled();
    });

    it('should delete node from top root when deleteNode() is called and user approved is false', function(){
    	userPromptResult = false;
   		spyOn(ctrl, 'removeNodesFromTree').and.callThrough();
   		
    	ctrl.deleteNode(selectedNode[0].child[0]);
    	expect(ctrl.removeNodesFromTree).not.toHaveBeenCalled();
    });

});
describe('Service: mngtHierarchyNodeServiceProvider', function() {


	var service, hierarchyNodeServiceMock, commonNodeHeirarchyModelMock, modalDialogBoxServiceMock;
	var rootNode = [{"name": "Sandra","id": 100,"parentsId": null,"child": [
				{"name":"Bob","id": 101,"parentsId": 100,"child": []}]}];
	var nodesDetails = [
		{"id": 100, "dob": "28/02/1976","start": "09/12/2001","possition": "Senior Developer","comments": "Work with smile in our company."},
		{"id": 101, "dob": "28/02/1981","start": "05/02/2005","possition": "Junior Developer","comments": "Work with hard for our company."}];
	
	beforeEach(module('myMngtHierarchyApp'));

	beforeEach(module(function($provide)
	{
		hierarchyNodeServiceMock = {
			success: true,
			getSelectedNode: function(rootNode, fail){
					if(this.success){
						rootNode(true);
					} else {
						fail(false)
					}
			}
		};
		
		commonNodeHeirarchyModelMock = {
			rootNode: rootNode
		}

		$provide.value('hierarchyNodeService', hierarchyNodeServiceMock);
		$provide.value('commonNodeHeirarchyModel', commonNodeHeirarchyModelMock);
	}));
	
	beforeEach(inject(function($injector, _$httpBackend_) {
		httpBackend = _$httpBackend_;
		service = $injector.get('mngtHierarchyNodeServiceProvider');
	}));

	it('should be defined', function()
	{
        expect(service).toBeDefined();
    });

    it('should be true when loadTopNode is called and nodes are successfully loaded', function(){
    	hierarchyNodeServiceMock.success = true;

    	var callbackCalled = false;

    	var callback = function(responce) {
    		expect(responce).toBeTruthy();
        	callbackCalled = true; 
        };

        spyOn(commonNodeHeirarchyModelMock, 'rootNode')
    	service.loadTopNode(callback);
    	expect(callbackCalled).toBeTruthy(); 
    });

    it('should be false when loadTopNode is called and nodes are unsuccessfully loaded', function(){
    	hierarchyNodeServiceMock.success = false;

    	var callbackCalled = false;

    	var callback = function(responce) {
    		expect(responce).toBeFalsy();
        	callbackCalled = true; 
        };
        
    	service.loadTopNode(callback);
    	expect(callbackCalled).toBeTruthy(); 
    });
});
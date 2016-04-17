describe('Controller: mngtHierarchyController', function() {

	beforeEach(module('myMngtHierarchyApp'));

	var ctrl, mockMngtHierarchyProvider, mockCommonNodeHeirarchyModel, mockLocation, mockToaster;


	var node = [{
			"name": "Sandra",
			"id": 100,
			"parentsId": null,
			"child": [{
						"name": "Bob",
						"id": 101,
						"parentsId": 100,
						"child": [{
								"name": "David",
								"id": 106,
								"parentsId": 105,
								"child": []
							}]
						}, 
						{
						"name": "Fred",
						"id": 102,
						"parentsId": 100,
						"child": []
					}]
			}]

	beforeEach(module(function($provide) {

		mockMngtHierarchyProvider = {
			isFirstNaneSelected: true,
			selNodeSucceed: true,
			loadSucceed: true,
			detailsSuccesd: true,

			loadTopNode: function(response){
				if(this.loadSucceed) response(true);
				else response(false);
			},
			loadNodeDetails: function(response){
				if(this.detailsSuccesd) response(true);
				else response(false);
			},
			displayAssumeDialogBox: function(path, selectedNodeName){
				if(this.selNodeSucceed){
						if(this.isFirstNaneSelected){
							selectedNodeName("Sandra");
						} else {
							selectedNodeName("David");
						}
				} else {
					selectedNodeName(false);
				}
			}
		};

		mockCommonNodeHeirarchyModel = {
			rootNode: node,
			allNodesDetails: []
		};

		mockLocation = {
			path: function(path) {}
		};

		mockToaster = {
			pop: function(error,message, option) {}
		};

		$provide.value("mngtHierarchyNodeServiceProvider", mockMngtHierarchyProvider);
		$provide.value("commonNodeHeirarchyModel", mockCommonNodeHeirarchyModel);
		$provide.value("$location", mockLocation);
		$provide.value("toaster", mockToaster);

	}));

	beforeEach(inject(function($controller) {
        ctrl = $controller('mngtHierarchyController');
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should load top hierarchy node when init() is called and get call assume identity box where sub-node is selected', function(){

    	mockMngtHierarchyProvider.isFirstNaneSelected = true;
    	mockMngtHierarchyProvider.selNodeSucceed = true;
    	mockMngtHierarchyProvider.loadSucceed = true;
    	mockMngtHierarchyProvider.detailsSuccesd = true;

    	expect(ctrl.showPage).toBeFalsy();
    	expect(ctrl.isTopNavigationBtnDisabled).toBeFalsy();
    	expect(ctrl.accountTitle).toBeUndefined

    	spyOn(mockMngtHierarchyProvider, 'loadTopNode').and.callThrough();
    	spyOn(mockMngtHierarchyProvider, 'loadNodeDetails').and.callThrough();

    	ctrl.init();

    	expect(ctrl.showPage).toBeTruthy();
    	expect(ctrl.isTopNavigationBtnDisabled).toBeTruthy();
    	expect(ctrl.accountTitle).toEqual("Profile of Sandra");
    });

    it('should load top hierarchy node when init() is called and get call assume identity box where top node is selected', function(){

    	mockMngtHierarchyProvider.isFirstNaneSelected = false;
    	mockMngtHierarchyProvider.selNodeSucceed = true;
    	mockMngtHierarchyProvider.loadSucceed = true;
    	mockMngtHierarchyProvider.detailsSuccesd = true;

    	expect(ctrl.showPage).toBeFalsy();
    	expect(ctrl.isTopNavigationBtnDisabled).toBeFalsy();
    	expect(ctrl.accountTitle).toBeUndefined

    	spyOn(mockMngtHierarchyProvider, 'loadTopNode').and.callThrough();
    	spyOn(mockMngtHierarchyProvider, 'loadNodeDetails').and.callThrough();

    	ctrl.init();

    	expect(ctrl.showPage).toBeTruthy();
    	expect(ctrl.isTopNavigationBtnDisabled).toBeTruthy();
    	expect(ctrl.accountTitle).toEqual("Profile of David");
    });



});
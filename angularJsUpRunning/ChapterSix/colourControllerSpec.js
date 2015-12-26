describe('Controller: mainController', function() {
	var url = 'https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/angularJsUpRunning/ChapterSix/my-api-notes.json';
	var ctrlMock, httpMock, capitalizeMock;
	beforeEach(module('getHttpApp'));

	beforeEach(inject(function($controller, $httpBackend){
		ctrlMock = $controller('mainController');
		httpMock = $httpBackend;
		httpMock.expectGET(url).respond(200,{"id": 0, "label": "black", "htmlCode": "#000000","author": "David Sajdl"});
	
	}));

	afterEach(function() {
		httpMock.verifyNoOutstandingExpectation();
	});

	it('should be defined', function(){
		expect(ctrlMock).toBeDefined();
	});

	it('should text has value', function(){
		expect(ctrlMock.text).toEqual('getting data from http server');
		expect(ctrlMock.items).toEqual([]);
	});

	it('should get http', function(){
		httpMock.flush();
		expect(ctrlMock.items).toEqual({"id": 0, "label": "black", "htmlCode": "#000000","author": "David Sajdl"});
	});

});
describe('Stock Directive testing',function() {

	beforeEach(module('advanceDivScopeApp'));

	var compile, mockBackend, rootScope, scope, userClick;

	// step 1 - inject dependencies
	beforeEach(inject(function($compile, $httpBackend, $rootScope) {
		compile = $compile; 
		mockBackend = $httpBackend;
		rootScope = $rootScope;

		// step 2
			scope = rootScope.$new();
			scope.myStock = {
				name: 'The Best Stock',
				price: 300,
				previous: 250
			};
			scope.title = 'the best';

			//step 3
			mockBackend.expectGET('stock.html').respond(
					'<div ng-bind="stockTitle"> </div>' +
					'<div ng-bind="stockData.price"></div>');
	}));

	
			

	it( 'should render HTML based on the correctly', function() {
			
			// step 4
			var element = compile('<div stock-widget' +
				' stock-data="myStock"' +
				' stock-title="This is {{ title }}"></div>')(scope);

			// step 5
			scope.$digest();
			mockBackend.flush();

			// step 6
			expect(element.html()).toEqual(
					'<div ng-bind="stockTitle" class="ng-binding">'+
					'This is the best' +
					'</div>' +
					'<div ng-bind="stockData.price" class="ng-binding">' +
					'300' +
					'</div>');
	});

	it('should have functions and dat on the scope correctly', function() {
		// step 2 assign valus to scope variable
		scopeClickCalled = '';
		scope.userClick = function(stockPrice,
									stockPrevious,
									stockName) {
			scopeClickCalled =  stockPrice + 
							';' + stockPrevious + 
							';' + stockName
			};

		// step 4
			var element = compile('<div stock-widget' +
				' stock-data="myStock"' +
				' stock-title="This is {{ title }}"'+
				' when-select="userClick(stockPrice, ' +
				' stockPrevious, stockName)"></div>')(scope);


		// step 5
			scope.$digest();
			mockBackend.flush();

		// step 6
		var compiledElementScope = element.isolateScope();

		expect(compiledElementScope.stockData).toEqual(scope.myStock);

		expect(compiledElementScope.getChange(compiledElementScope.stockData)).toEqual(20);

		//step 7
		expect(scopeClickCalled).toEqual('');
		compiledElementScope.onSelect();
		expect(scopeClickCalled).toEqual('300;250;The Best Stock');
	});
});
// test suite in Jasmine

describe('My_function_name', function(){

	var t;

	// similar to setup
	beforeEach(function(){
		t = true;
	});

	afterEach(function(){
		t = null;
	});

	it('should perform action 1', function() {
		expect(t).toBeTruthy();
	});

	it('should perform action 2', function() {
		var expectedValue = true;
		expect(t).toEqual(expectedValue);
	});
});
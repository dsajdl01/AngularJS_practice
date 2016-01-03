describe('filter', function() {

	var filter;
	beforeEach(module('getHttpApp'));

	it('should have a range filter', inject(function($filter) {
	    expect($filter('capitalize')).not.toBeNull();
	}));

	it('should have a range filter that produces an array of numbers',
    	inject(function($filter) {	
	    filter = $filter('capitalize');
  	}));

	it('should be defined', function(){
		expect(filter).toBeDefined();
	});

	it('sould capitilaze first letter of the string and the rest of the string should be in lower case', function() {
		expect(filter("david")).toEqual("David");
		expect(filter("anna Shimth")).toEqual("Anna shimth");
		expect(filter("bob Leon Andy")).toEqual("Bob leon andy");
		expect(filter("david Sajdl")).toEqual("David sajdl");
	});

});
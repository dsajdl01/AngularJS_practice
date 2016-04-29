describe('Service: calculateTimeService', function() {

	var service;
	var sevenDayAgo = new Date();
	sevenDayAgo.setDate(sevenDayAgo.getDate() - 5);

	beforeEach(module('myMngtHierarchyApp'));

	beforeEach(inject(function($injector) {
		service = $injector.get('calculateTimeService');
	}));

	it('should be defined', function() {
        expect(service).toBeDefined();
        console.log(sevenDayAgo.toLocaleString());
    });

    it('should return today date in format dd/mm/yyy.', function(){
    	var today = new Date();
    	var dateArray = today.toLocaleString().split(",");
    	console.log(">>", dateArray);
    	var dateExcepted =dateArray[0].split("/")
    	var received = service.getCurrentDate().split("/");
    	expect(received.length).toBe(dateExcepted.length);
    	expect(received[0]).toContain(dateExcepted[1]); // months 
    	expect(received[1]).toContain(dateExcepted[0]); // day
    	expect( received[2] ).toEqual( dateExcepted[2] );  // year
    	console.log(">>", dateExcepted, " == ", received );	
    })

});
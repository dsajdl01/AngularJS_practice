describe('Controller: ListCtrl', function(){

	// Instantiate a new version of modyle before each test
	beforeEach(module('notesApp'));

	var ctrl;

	// before each unit test instantiate a new instance of the controller
	beforeEach(inject(function($controller) {
		ctrl = $controller('ListCtrl');
	}));

/*	afterEach(function(){
		ctrl = null;
	});
*/
	it('should have items available on notes', function() {
		expect(ctrl.items).toEqual([
			{id: 1, lable: 'First', done: true},
			{id: 2, lable: 'Second', done: false}
		]);
	});

	it('should have highlite notes base on state', function() {
		var item = {id: 1, lable: 'First', done: true};

		var actualClass = ctrl.getDoneClass(item); 
		expect(actualClass.finished).toBeTruthy();
		expect(actualClass.unfinished).toBeFalsy();

		item.done = false;
		actualClass = ctrl.getDoneClass(item);
		expect(actualClass.finished).toBeFalsy();
		expect(actualClass.unfinished).toBeTruthy();
	});
});
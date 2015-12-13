angular.module('notesApp', [])
	.controller('ListCtrl', [function() {

	var self = this;

	self.items = [
		{id: 1, lable: 'First', done: true},
		{id: 2, lable: 'Second', done: false}
	];

	self.getDoneClass = function(item){
		return {
			finished: item.done,
			unfinished: !item.done
		};
	};

}]);
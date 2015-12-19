angular.module('notesApp',[])
	.controller('MainController', [ function(){
		var self = this;
		self.tab = 'first';
		self.open = function(tab){
			self.tab = tab;
		};
	}])
	.controller('subController', [function(){
		var self = this;
		self.list = [
			{id: 1, label: 'item_0'},
			{id: 2, label: 'item_1'},
			{id: 3, label: 'item_2'},
			{id: 4, label: 'item_3'}
		];
		self.add = function(){
			self.list.push({
				id: self.list.length + 1,
				label: 'item_' + self.list.length
			});
		};
	}]);
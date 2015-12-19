angular.module('notesApp', [])
	.controller('singleController', [ function(){
		var self = this;
		self.tab = 'first';
		self.open = function(tab){
			self.tab = tab;
		};
	}])
	.controller('subController', ['ItemService', function(ItemService){
		var self = this;
		self.list = function() {
			return ItemService.list();
		};

		self.add = function(){
			ItemService.add({
				id: self.list().length + 1,
				label: 'Item - ' + self.list().length
			});
		};
	}])
	.factory('ItemService', [function(){
		var items = [
			{id: 1, label: 'Item - 0'},
			{id: 2, label: 'Item - 1'}
		];
		return {
				list: function() {
					return items;
				},
				add: function(item) {
					items.push(item);
				}
		};
	}]);
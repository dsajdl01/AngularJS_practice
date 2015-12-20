function ItemService(opt_item){

	var items = opt_item;

	this.list = function(){
		return items;
	}
	this.add = function(item){
		items.push(item);
	};
}

angular.module('notesApp', [])
	.provider('ItemService', function() {
		var haveDefaultItems = true;
	
		this.disableDefaultItems = function() {
			haveDefaultItems = false;
		}

		//this function gets dependencies not provider above
		this.$get = [function(){
			var optItems = [];
			if(haveDefaultItems)
			{
				optItems = [
					{id: 1, label: 'ITEM 0'},
					{id: 2, label: 'ITEM 1'}
				];
			}
			return new ItemService(optItems);
		}];
	})
	.config(['ItemServiceProvider', function(ItemServiceProvider) {
			/**
			* to load html page without any items (without items it 1 and 2) 
			set shouldHaveDefaults variable to false */
			var shouldHaveDefaults = false;

			if(!shouldHaveDefaults){
				ItemServiceProvider.disableDefaultItems();
			}
	}])
	.controller('mainController', [ function(){
		
			var self = this;
			self.tab = 'first';
			self.open = function(tab) {
				self.tab = tab;
			};		
	}])
	.controller('subController', ['ItemService',function(ItemService) {
			var self = this;
			self.list = function() {
				return ItemService.list();
			};
			self.add = function(){
				ItemService.add({
					id: self.list().length + 1,
					label: 'ITEM ' + self.list().length
				});
			};
	}]);

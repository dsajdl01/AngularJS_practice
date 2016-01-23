advanceDivScopeApp.controller('mainStockController', [ function(){
 		
 		var self = this;
 		self.item = [];
 		self.shows = false;
 		var index = 0;
 		self.stocks = [
 				{name: 'First Stock', price: 100, previous: 220},
				{name: 'Second Stock', price: 140, previous: 120},
				{name: 'Third Stock', price: 90, previous: 110},
				{name: 'Fourth Stock', price: 110, previous: 110},
				{name: 'Fifth Stock', price: 400, previous: 420}

 		];

 		self.onStockSelected = function(price, name){
 			console.log('Selected price: ', price, ', Name: ', name);
 			self.item.push(index +") Selected price: " + price + ", Name: " + name);
 			index ++;
 			self.shows = true;
 		};
 	}]);
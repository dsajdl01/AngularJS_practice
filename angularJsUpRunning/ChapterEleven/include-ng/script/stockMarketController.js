stockMarketApp.controller('StockMarketController', [function(){
	var self = this;
	self.stocks = [
		{name: 'First Stock', price: 100, previous: 220},
		{name: 'Second Stock', price: 140, previous: 120},
		{name: 'Third Stock', price: 90, previous: 110},
		{name: 'Fourth Stock', price: 120, previous: 90},
		{name: 'Fifth Stock', price: 400, previous: 320}
	];

	self.stockTemplate = 'stock.html';
	self.getChange = function(stock) {
		return Math.ceil((
			(stock.price - stock.previous) / stock.previous) * 100);
	};
}]);
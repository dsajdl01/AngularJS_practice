stockBrRefApp.controller('stockMainController', [function(){
	var self = this;
	self.inputNum = -1;
	self.invalid = true;
	self.message = "Enter index number please.";
	self.indexNum = 0;
	self.btnDisable = true;
	self. btnName = "First";
	self.stocks = [
			{name: 'First Stock', price: 100, previous: 220},
			{name: 'Second Stock', price: 140, previous: 120},
			{name: 'Third Stock', price: 90, previous: 110},
			{name: 'Fourth Stock', price: 110, previous: 110},
			{name: 'Fifth Stock', price: 400, previous: 420}
	]; 
	
	self.changeAllStocks = function(){
		for(var i = 0; i < 10; i++){
			self.stocks[i] = {
				name: 'Controller Stock',
				price: 200,
				previous: 250
			};
		}
	};

	self.changeFirstStock = function(){
		var index = 0;
		if(self.inputNum > 0 && self.inputNum < self.stocks.length) {
			index = self.inputNum;
		} 
		self.stocks[index].name = 'change '+ getBtnName(index) +' Stock';
		self.btnDisable = true;
	};

	self.getSelectedNumber = function(){
		if(self.inputNum >= 0 && self.inputNum < self.stocks.length) {
			self.message = "Current selected index is: " + self.inputNum + ", row: " + (self.inputNum + 1);
			self.invalid = true;
			self.btnDisable = false;
			self.indexNum = self.inputNum;
			self.btnName = getBtnName(self.inputNum);
		} else {
			self.message = "Please enter numbers between 0 and " + (self.stocks.length - 1) + " included";
			self.invalid = true;
			self.btnDisable = true;
		}
	}

	var getBtnName = function(n){
		if (n == 0) return "First";
		if (n == 1) return "Second";
		if (n == 2) return "Third";
		if (n == 3) return "Fourth";
		if (n == 4) return "Fifth";
		if (n == 5) return "Sixth";
		if (n == 6) return "Seventh";
		if (n == 7) return "Eighth";
		if (n == 8) return "Nineth";
		if (n == 9) return "Tenth";
		else return "Default";
	}
}]);
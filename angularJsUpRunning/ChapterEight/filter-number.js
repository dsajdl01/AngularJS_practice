angular.module('filterApp', [])
	.controller('filterCtrl', [function() {
		var self = this;
		self.amount = 1024;
		self.name = 'David Sajdl';
		self.obj = {test: 'the Value', number: 123 };
		self.startTime = new Date().getTime();
	}]);
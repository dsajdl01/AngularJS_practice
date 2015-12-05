app.controller('MainController', ['$scope', function($scope) {
  $scope.header = "Available Movie";
  $scope.content = "Each move is can be uploaded for one week. Then it would be autocratically removed from your PC unless you pay for another week.";
  $scope.apps = [ 
	  { 
	    icon: 'img/brooklyn.jpg', 
	    type: 'DRAMA / ROMANCE', 
	    name: 'Brooklyn', 
	    price: 1.99 
	  }, 
	  { 
	    icon: 'img/mimions.jpg', 
	    type: 'ANIMATION / COMEDY', 
	    name: 'Mimions', 
	    price: 1.00 
	  },
	  {
	    icon: 'img/htr_game.jpg',
	    type: 'ACTION / SCIFI',
	    name: 'The Hunger Games.',
	    price: 2.50
	  },
	  {
	    icon: 'img/cinderella.jpg',
	    type: 'ROMANCE',
	    name: 'Cinderella',
	    price: 1.99
	  }
	]
}]);
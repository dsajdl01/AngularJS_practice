stockBrRefApp.directive('stockWidget', [function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {
				stockData: '='
			}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 	restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'stock.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, $element, $attrs) {

				$scope.getChange = function(stock){
					return Math.ceil(((stock.price - stock.previous) / 
										stock.previous) * 100);
					};

				$scope.changeStock = function(){
					$scope.stockData = {
						name: 'Directive Stock',
						price: 500,
						previous: 200
					};
				};
			}
		};
}]);
angular.module('musicApp')
	.directive('musicWidget', [ function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			 scope: { 
			 	musicData: '='
			 }, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			 templateUrl: 'music.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, $element, $attrs) {
				$scope.getTotal = function(music) {
					return music.uk + music.usa + music.eu;
				};
			}
		};
	}]);
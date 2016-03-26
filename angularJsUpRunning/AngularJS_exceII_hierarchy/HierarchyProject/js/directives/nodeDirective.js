myMngtHierarchyApp.directive( 'editNodeInPlace', function() {
    return {
   	restric: 'E',
    	scope: {
           value: '@'
    	},
    	template: '<input type="text" class="editField" ng-model="value" >', //<p> {{ s.name }} </p>', //'<input type="text" value="hkdfsk">', // ng-model="value"'>,

    	link: function ( $scope, $element, attrs ){

    	}
	};
    
});
myMngtHierarchyApp.directive( 'editNodeInPlace', function() {
    return {
   	restric: 'E',
    	scope: {
   		 	select: '&', // IS CALLED WHEN USER CLICK ON THE NODE "INPUT FILE"
           	value: '@',
           	isSelectedCondition: '@'
    	},
    	templateUrl: 'js/views/accounts.html',

    	link: function ( $scope, $element, attrs ){

    		$scope.selectedNode = function(){
    			$scope.select();
    		};

    		$scope.getSelectedClass = function() {
                return  isSelected() ? "selected" : "";
            };

            function isSelected() {
                return $scope.isSelectedCondition === "true";
            };

    	}
	};
    
});
myMngtHierarchyApp.directive( 'editNodeInPlace', function() {
    return {
   	restric: 'E',
    	scope: {
   		 	  select: '&', // IS CALLED WHEN USER CLICK ON THE NODE "INPUT FILE"
          value: '@',
          update: '&',
          isSelectedCondition: '@',
          validateValue: '&',
          editable: '@',
          beingEdit: '&'
    	},
    	templateUrl: 'js/views/accounts.html',

    	link: function ( $scope, $element, attrs ){

        var originalNodeValue, savingValue = false;
      
        var inputElement = angular.element( $element.children()[1] );

    		$scope.selectedNode = function(){
    			$scope.select();
    		};

    		$scope.getSelectedClass = function() {
            return  isSelected() ? "selected" : "";
        };

        $scope.modifiedNodeName = function(){
          if(isEditable()) {
            savingValue = false;
            originalNodeValue = $scope.value;
            $element.addClass('active');
            inputElement[0].focus();
            $scope.beingEdit();
          }
        }

        $scope.fireBlurred = function(){
          cancelEditing();
        }

        var isEditable = function(){
          return $scope.editable === 'true';
        }

        var validateInput = function(){
            var validatedResult = $scope.validateValue({value: $scope.value});
            return validatedResult;
        }

        $scope.fireEditing = function(event)
            {
                var validInput = validateInput();
                console.log("valInput: ", validateInput);
                if(event.keyCode === 13) {
                    if (!validInput.valid) {
                        event.preventDefault();
                        return;
                    }
                    cancelEditingEvent(event);
                    originalNodeValue = $scope.value;
                    $scope.update({newName: $scope.value});
                }
                else if(event.keyCode === 27) {
                    cancelEditing(event);
                }
            };

        var isSelected = function() {
            return $scope.isSelectedCondition === "true";
        };

        var cancelEditingEvent = function(event){
          savingValue = false;
          if (angular.isDefined(event)) {
              event.preventDefault();
            }
          $element.removeClass('active');
        }

        var cancelEditing = function(event){
          cancelEditingEvent(event)
          $scope.value = originalNodeValue;
        }
    	}
	};
    
});
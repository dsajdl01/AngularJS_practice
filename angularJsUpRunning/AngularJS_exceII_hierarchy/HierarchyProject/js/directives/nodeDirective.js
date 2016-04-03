myMngtHierarchyApp.directive( 'editNodeInPlace', function() {
    return {
   	restric: 'E',
    	scope: {
   		 	  select: '&', // IS CALLED WHEN USER CLICK ON THE NODE "INPUT FILE"
          value: '@',
          update: '&',
          isSelectedCondition: '@',
          validateValue: '&',
          editable: '@'
    	},
    	templateUrl: 'js/views/accounts.html',

    	link: function ( $scope, $element, attrs ){

        var originalNodeValue, savingValue = false;
        console.log("element: ", $element.children()[1]);
        var inputElement = angular.element( $element.children()[1] );

    		$scope.selectedNode = function(){
          console.log("selectedNode() running...");
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
            console.log($element.addClass('active'));
            inputElement[0].focus();
            console.log("innn is Editable()");
          }
          console.log("modifiedNodeName() function running ....", $element);
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
                if(event.keyCode === 13) {
                    if (!validInput) {
                        event.preventDefault();
                        console.log("validateInput is false!!! ");
                        cancelEditingEvent(event);
                        return;
                    }
                    $scope.update({newName: $scope.value});
                }
                else if(event.keyCode === 27) {
                    cancelEditing(event);
                }
            };

        function isSelected() {
            return $scope.isSelectedCondition === "true";
        };

        var cancelEditingEvent = function(event){
          savingValue = false;
          if (angular.isDefined(event)) {
              event.preventDefault();
              console.log("event is Defined!!!");
            }
          $element.removeClass( 'active' );
        }

        var cancelEditing = function(event){
          console.log("originalNodeValue:", originalNodeValue ,"\ncancelEditing(): ", event, "\nelement: ", $element);
          cancelEditingEvent(event)
          $scope.value = originalNodeValue;
        }
    	}
	};
    
});
app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/installApp.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Upload",
      scope.uploaded = false,

      scope.download = function() {
        element.toggleClass('btn-active')
        if(scope.uploaded) {
          scope.buttonText = "Upload";
          scope.uploaded = false;
        } else {
          scope.buttonText = "Uploaded";
          scope.uploaded = true;
        }
      }
    }
  };
});
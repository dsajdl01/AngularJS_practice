app.factory('photos', ['$http', function($http) {
  return $http.get('https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/codecademy/fouthLecture/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/codecademy/thrirdLecture/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
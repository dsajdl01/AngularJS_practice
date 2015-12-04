
// file: controllers/MainController.js
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Book\'s I Bought'; 
  $scope.promo = 'The most my popular books are:';
  $scope.textLike = 'Like';
  $scope.textDislike = 'Dislike';
    $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };
  $scope.minusOne = function(index) { 
    $scope.products[index].dislikes += 1; 
  };
  $scope.products = [ 
    								 { 
    										name: 'Restfull Java Web Services',
                        price: 29,
                        ordered: new Date('2014', '10', '18'),
                        cover: 'img/restfull-java-web-services.jpg',
                        likes: 10,
                        dislikes: 0 
                     },
                     { 
                       name: 'Seven Languages in Seven Weeks: A Pragmatic Guide',
                       price: 16,
                       ordered: new Date('2014', '08', '01'),
                       cover: 'img/seven-languages-in-seven-weeks.jpg',
                       likes: 7,
                       dislikes: 2 
                     },
    								 { 
                       name: 'AngularJS Up & Running',
                       price: 16.5,
                       ordered: new Date('2015', '11', '03'),
                       cover: 'img/angularJS-up-running.jpg',
                       likes: 7,
                       dislikes: 2 
                     },
                     { 
                       name: 'Artificial Intelligence: A Guide to Intelligent Systems',
                       price: 46.99,
                       ordered: new Date('2014', '08', '10'),
                       cover: 'img/artificial-intelligence.jpg',
                       likes: 6,
                       dislikes: 3 
                     },
    								 { 
                       name: 'HTML & CSS: Design and Build Web Site',
                       price: 13.05,
                       ordered: new Date('2015', '10', '18'),
                       cover: 'img/html-css.jpg',
                       likes: 5,
                       dislikes: 4 
                     }
    
                    ]

}]);

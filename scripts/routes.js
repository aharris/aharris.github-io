(function(){

  var routes = angular.module('routes', []);

  routes.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'templates/home.html',
        controller: 'AppController'
      })
      .when('/work', {
        templateUrl : 'templates/work.html',
        controller: 'AppController'
      })
      .when('/about', {
        templateUrl : 'templates/about.html',
        controller: 'AppController'
      })
      .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller: 'AppController'
      })
      .otherwise({
        redirectTo: 'templates/404.html'
      });
  }]);

})();
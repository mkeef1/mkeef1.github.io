(function(){
  'use strict';
  var index = angular.module('matt', ['ngRoute']);

  //Angular Routes
  index.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller:'HomeCtrl'})
    .when('/about', {templateUrl:'home/about.html', controller:'AboutCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();

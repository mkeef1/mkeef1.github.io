(function(){
  'use strict';

  var home = angular.module('matt');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';
    $scope.projects = ['Example 1', 'Example 2', 'Example 3', 'Example 4', 'Example 5'];
  }]);
})();

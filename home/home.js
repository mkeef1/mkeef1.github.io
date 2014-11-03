(function(){
  'use strict';

  var home = angular.module('matt');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';
  }]);
})();

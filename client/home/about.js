(function(){
  'use strict';

  var about = angular.module('matt');

  about.controller('AboutCtrl', ['$scope', function($scope){
    $scope.title    = 'About Page';
  }]);
})();

(function(){
  'use strict';

  var home = angular.module('matt');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title    = 'Home Page';
    $scope.angular  = ['Example 1', 'Example 2', 'Example 3', 'Example 4', 'Example 5'];
    $scope.mobile   = ['Mobile 1', 'Mobile 2', 'Mobile 3'];
    $scope.games    = ['Game 1', 'Game 2', 'Game 3'];
    $scope.capstone = ['Cap 1', 'Cap 2', 'Cap 3'];

    $scope.scrollTo = function(id){
      //Angular Scroll
      /*
      $location.hash(id);
      $anchorScroll();
      */
      //jQuery Smooth Scroll
      var $root = $('html, body');
      $root.animate({
        scrollTop: $('#' + id).offset().top
      }, 500);
    };
  }]);
})();

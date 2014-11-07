(function(){
  'use strict';

  var home = angular.module('matt');

  home.controller('HomeCtrl', ['$scope', function($scope){

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

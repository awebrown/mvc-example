angular.module('dating-site.controllers')

  .controller('MainCtrl', ['$scope', '$log', '$state', 'User', '$timeout', '$mdSidenav', function($scope, $log, $state, User, $timeout, $mdSidenav) {

    $scope.toggleLeft = buildDelayedToggler('left');

    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    function buildDelayedToggler(sideNav) {
      return debounce(function() {
        $mdSidenav(sideNav)
          .toggle()
          .then(function () {
            $log.debug("toggle " + sideNav + " is done");
          });
      }, 200);
    }

    function buildToggler(sideNav) {
      return function() {
        $mdSidenav(sideNav)
          .toggle()
          .then(function () {
            $log.debug("toggle " + sideNav + " is done");
          });
      }
    };

    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.user = {};

    User.getCurrentUser()
      .then(function(user) {
        $scope.user = user.data;
      });

    $scope.editProfileView = function() {
      $state.go('home.editProfile');
    };

    $scope.saveProfile = function() {
      User.updateUser($scope.user)
        .then(function(user) {
          console.log(user);
          $state.go('home.profile');
        });
    };
}])

  .directive("homeScreen", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/homeScreen.html'
      }
    })

  .directive("sideNav", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/sideNav.html'
      }
    })

  .directive("fileUpload", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/fileUpload.html'
      }
    })

  .directive("profileView", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/profile.html'
      }
    })
  .directive("messagesView", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/messages.html'
      }
    })
  .directive("matchesView", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/matches.html'
      }
    })
  .directive("mainView", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/homeScreen.html'
      }
    })
  .directive("toolbar", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/toolbar.html'
      }
    });
  
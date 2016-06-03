angular.module('dating-site.controllers')

  .controller('ProfileCtrl', ['$scope', '$log', '$state', 'User', function($scope, $log, $state, User) {

    $scope.user = {};

    User.getCurrentUser()
      .then(function(user) {
        $scope.user = user.data;
      });

    $scope.editProfileView = function() {
      $state.go('editProfile');
    };

    $scope.saveProfile = function() {
      User.updateUser($scope.user)
        .then(function(user) {
          console.log(user);
          $state.go('home');
        });
    };

    $scope.homeView = function() {
      $state.go('home');
    };

    $scope.matchesView = function() {
      $state.go('matches');
    };

    $scope.messagesView = function() {
      $state.go('messages');
    };
}])
  .directive("homeScreen", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/homeScreen.html'
      }
    })

  .directive("profileNav", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/profileNav.html'
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
    });




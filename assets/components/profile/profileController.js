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
          $state.go('profile');
        });
    };

    $scope.profileView = function() {
      $state.go('profile');
    };

    $scope.matchesView = function() {
      $state.go('matches');
    };

    $scope.messagesView = function() {
      $state.go('messages');
    };
}])

  .directive("profileNav", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/profilenav.html'
      }
    })

  .directive("fileUpload", function(){
      return {
        restrict: 'E',
        templateUrl: 'directives/fileUpload.html'
      }
    });




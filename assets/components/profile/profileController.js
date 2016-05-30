angular.module('dating-site.controllers')

  .controller('ProfileCtrl', ['$scope', '$log', '$state', 'profileService', function($scope, $log, $state, profileService) {

    $scope.firstName = profileService.firstName;
    $scope.$watch('firstName', function() {
      profileService.firstName = $scope.firstName;
    });

    $scope.lastName = profileService.lastName;
    $scope.$watch('lastName', function() {
      profileService.lastName = $scope.lastName;
    });

    $scope.DOB = profileService.DOB;
    $scope.$watch('DOB', function() {
      profileService.DOB = $scope.DOB;
    });

    $scope.about = profileService.about;
    $scope.$watch('about', function() {
      profileService.about = $scope.about;
    });

    $scope.editProfileView = function() {
      $state.go('editProfile');
    };

    $scope.saveProfile = function() {
      $state.go('profile');
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
    });






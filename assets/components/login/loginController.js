angular.module('dating-site.controllers')

  .controller('LoginCtrl', function($scope, $rootScope, $state, Login, $window) {

    $scope.login = function(username, password) {
      Login.login(username, password)
        .then(function(success) {
          $state.go('home');
        }, function(error) {
          $window.alert(error.data.error);
        });
    };
  });

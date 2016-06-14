angular.module('dating-site.controllers')

  .controller('SignUpCtrl', function($scope, $rootScope, $state, Login, $window) {

    $scope.register = function(username, password) {
      Login.register(username, password)
        .then(function(success) {
          $state.go('home.editProfile');
        }, function(error) {
          $window.alert(error.data);
        });
    };
  });

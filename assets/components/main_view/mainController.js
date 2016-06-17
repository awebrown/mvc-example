angular.module('dating-site.controllers')

  .controller('MainCtrl', ['$scope', '$log', '$state', 'User', '$timeout', '$mdSidenav', 'Match',
    function($scope, $log, $state, User, $timeout, $mdSidenav, Match) {



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
    }

    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

      Match.getMatches()
        .then(function(data) {
          console.log(data);
          console.log(data.data);
          $scope.matches = data.data;
        });


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

    //Dummy Data
    var imagePath = 'images/gem-06.gif';
    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      ];

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











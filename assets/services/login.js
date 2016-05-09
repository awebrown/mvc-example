angular.module('dating-site.services')

  .factory('Login', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
      return {
        login: function(username, password) {
          return $http.post('/login/login', {username: username, password: password});
        },

        logout: function() {
          //TODO
        }
      }
    }
  ]);

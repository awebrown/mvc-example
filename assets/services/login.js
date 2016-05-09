angular.module('dating-site.services')

  .factory('Login', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
      return {
        login: function(email, password) {
          return $http.post('/auth/login', {email: email, password: password});
        },

        logout: function() {
          return $http.get('/auth/logout');
        },

        register: function(email, password) {
          return $http.post('/auth/register', {email: email, password: password});
        }
      }
    }
  ]);

angular.module('dating-site.services')

  .service('User', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
      return {
        getCurrentUser: function() {
          return $http.get('/user/getCurrentUser');
        },

        updateUser: function(attrs) {
          if (attrs.auth) {
            delete attrs.auth;
          }
          return $http.post('/user/updateCurrentUser', attrs);
        }
      }
    }
  ]);

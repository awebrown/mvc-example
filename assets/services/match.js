angular.module('dating-site.services')

  .factory('Match', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
      return {
        getMatches: function() {
          return $http.get('/match/getMatches');
        }
      }
    }
  ]);

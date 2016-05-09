'use strict';

// Declare app level module which depends on views, and components
angular.module('dating-site', [
    'ui.router',
    'dating-site.controllers',
    'dating-site.services'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'components/login/loginView.html',
        controller: 'LoginCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  });

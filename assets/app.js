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
      })
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'components/signUp/signUpView.html',
        controller: 'SignUpCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'components/profile/profileView.html',
        controller: 'ProfileCtrl'
      })
      .state('editProfile', {
        url: '/edit-profile',
        templateUrl: 'components/profile/editProfileView.html',
        controller: 'ProfileCtrl'
      })
      .state('matches', {
        url: '/matches',
        templateUrl: 'components/matches/matchesView.html',
        controller: 'ProfileCtrl'
      })
      .state('messages', {
        url: '/messages',
        templateUrl: 'components/messages/messagesView.html',
        controller: 'ProfileCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  });

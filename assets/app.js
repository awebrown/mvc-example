'use strict';

// Declare app level module which depends on views, and components
angular.module('dating-site', [
    'ui.router',
    'ngFileUpload',
    'ngMaterial',
    'dating-site.controllers',
    'dating-site.services'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    if (localStorage.getItem("access_token")) {
      $httpProvider.defaults.headers.common.access_token = localStorage.getItem("access_token");
    }

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
      .state('home', {
        url: '/home',
        templateUrl: 'components/main_view/mainView.html',
        controller: 'MainCtrl'
      })
      .state('home.matches', {
        url: '/matches',
        templateUrl: 'components/matches/matchesView.html',
        controller: 'MainCtrl'
      })
      .state('home.photos', {
        url: '/photos',
        templateUrl: 'directives/photos.html',
        controller: 'MainCtrl'
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'directives/profile.html',
        controller: 'MainCtrl'
      })
      .state('home.editProfile', {
        url: '/edit-profile',
        templateUrl: 'components/edit_profile/editProfileView.html',
        controller: 'fileUploadCtrl'
      })
      .state('home.messages', {
        url: '/messages',
        templateUrl: 'components/messages/messagesView.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  });

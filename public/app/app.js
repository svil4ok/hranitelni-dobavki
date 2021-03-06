'use strict';

var app = angular.module('HranitelniDobavki', ['ngResource', 'ui.router', 'mm.foundation', 'smoothScroll']);

app.config(function ($urlRouterProvider, $stateProvider) {
  //$locationProvider.html5Mode(true);

  // For any unmatched URL, redirect to /home
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('additives', {
      abstract: true,
      url: '/additives',
      template: '<ui-view />'
    })
    .state('additives.details', {
      url: '/view/:additiveNumber',
      templateUrl: 'app/additives/additives-details.html',
      resolve: {
        additives: ['$stateParams', 'AdditivesService', function ($stateParams, AdditivesService) {
          return AdditivesService.getAdditive($stateParams.additiveNumber);
        }]
      },
      controller: 'AdditivesController',
      controllerAs: 'adtv'
    })
    .state('additives.group', {
      url: '/group/:additiveGroup',
      templateUrl: 'app/additives/additives-group.html',
      resolve: {
        additives: ['$stateParams', 'AdditivesService', function ($stateParams, AdditivesService) {
          return AdditivesService.getGroup($stateParams.additiveGroup);
        }]
      },
      controller: 'AdditivesController',
      controllerAs: 'adtv'
    })
    .state('search', {
      url: '/search/:searchTerm',
      templateUrl: 'app/search/search-results.html',
      resolve: {
        searchTerm: ['$stateParams', function ($stateParams) {
          return $stateParams.searchTerm.trim();
        }],
        additives: ['$stateParams', 'AdditivesService', function ($stateParams, AdditivesService) {
          return AdditivesService.search($stateParams.searchTerm.trim());
        }]
      },
      controller: 'SearchController',
      controllerAs: 'srch'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    })
    .state('faq', {
      url: '/faq',
      templateUrl: 'app/faq/faq.html'
    });
});

app.run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});

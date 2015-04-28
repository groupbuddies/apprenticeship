(function() {
  'use strict';

  angular
    .module('apprenticeship', ['ngAnimate', 'ngTouch', 'ui.router'])
    .controller('appController', function($scope) {})
    .run(autoScroll)
    .config(router);

  function autoScroll($rootScope, $anchorScroll) {
    $rootScope.$on('$locationChangeSuccess', function() {
      $anchorScroll();
    });
  }

  function router($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/views/index.html',
      })
      .state('developer', {
        url: '/developer',
        templateUrl: 'app/views/dev_programs.html',
      })
      .state('designer', {
        url: '/designer',
        templateUrl: 'app/views/designer_programs.html',
      })
      .state('developer_apply', {
        url: '/developer/apply',
        templateUrl: 'app/views/applicant_form_dev.html',
      })
      .state('designer_apply', {
        url: '/designer/apply',
        templateUrl: 'app/views/applicant_form_designer.html',
      })
      .state('success', {
        url: '/success',
        templateUrl: 'app/views/success.html',
      });
  }
})();

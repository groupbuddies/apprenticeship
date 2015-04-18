'use strict';

var modules = ['ngAnimate', 'ngTouch', 'ui.router'];

var scrollToTop = function () {
  $('html, body').animate({ scrollTop: 0 }, 10);
};

var apprenticeship = angular.module('apprenticeship', modules);

apprenticeship.controller('appController', ['$scope', function($scope) {
  }]);

apprenticeship.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'app/views/index.html',
      onEnter: scrollToTop
    })
    .state('developer', {
      url: '/developer',
      templateUrl: 'app/views/dev_programs.html',
      onEnter: scrollToTop
    })
    .state('designer', {
      url: '/designer',
      templateUrl: 'app/views/designer_programs.html',
      onEnter: scrollToTop
    })
    .state('developer_apply', {
      url: '/developer/apply',
      templateUrl: 'app/views/applicant_form_dev.html',
      onEnter: scrollToTop
    })
    .state('designer_apply', {
      url: '/designer/apply',
      templateUrl: 'app/views/applicant_form_designer.html',
      onEnter: scrollToTop
    })
    .state('success', {
      url: '/success',
      templateUrl: 'app/views/success.html',
      onEnter: scrollToTop
    });
});

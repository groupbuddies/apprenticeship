'use strict';

var modules = ['ui.router'];

var apprenticeship = angular.module('apprenticeship', modules)
  .controller('appController', ['$scope', function($scope) {
  }])

apprenticeship.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "views/index.html"
    })
    .state('developer_programs', {
      url: "/dev_programs",
      templateUrl: "views/dev_programs.html"
    })
    .state('designer_programs', {
      url: "/designer_programs",
      templateUrl: "views/designer_programs.html"
    })
    .state('developer_apply', {
      url: "/developer_apply",
      templateUrl: "views/applicant_form_dev.html"
    })
    .state('designer_apply', {
      url: "/designer_apply",
      templateUrl: "views/applicant_form_designer.html"
    });
});

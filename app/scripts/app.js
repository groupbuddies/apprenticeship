'use strict';

angular.module('apprenticeship', [])
  .controller('applicantData', ['$scope', function($scope) {
    $scope.user = {};

    $scope.update = function(user) {
      $scope.authorize();
    };

    $scope.authorize = function() {
      Trello.authorize({
        interactive: true,
        type: 'popup',
        expiration: 'never',
        name: 'surveyrequest',
        persist: true,
        success: $scope.onAuthorizeSuccessful(),
        error: $scope.onFailedAuthorization(),
        scope: { read: true, write: true}
      });
    };

    $scope.onAuthorizeSuccessful = function() {
      Trello.post("cards", { name: "Card created for test", desc: "this is a test",  idList: "546c84343b42d112498bae36"});
    };


    $scope.onFailedAuthorization = function() {
      console.log('Authorization failed.');
    };

  }]);

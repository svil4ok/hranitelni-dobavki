'use strict';

app.controller('AdditivesController', ['$scope', 'additives', function ($scope, additives) {
  $scope.additives = additives;

  $scope.currentTab = 'group-description';
  $scope.isActiveTab = function (tabName) {
    return tabName === $scope.currentTab;
  };
}]);

'use strict';

app.controller('HomeController', function ($scope, $state, AdditivesData) {
  $scope.oneAtATime = true;

  $scope.search = function () {
    if (angular.isDefined($scope.searchTerm) && $scope.additiveSearch.$valid) {
      $state.go('search', {searchTerm: $scope.searchTerm});
    }
  };

  AdditivesData.query(function (data) {
    $scope.additives = data.categories;
  });
});

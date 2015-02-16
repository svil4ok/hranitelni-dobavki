'use strict';

app.controller('HomeController', ['$scope', '$state', 'AdditivesService', function ($scope, $state, AdditivesService) {
  var self = this;

  $scope.oneAtATime = true;

  AdditivesService.getAll().$promise.then(function (data) {
    self.additives = data.categories;
  });

  self.search = function () {
    if (angular.isDefined(self.searchTerm) &&
        self.additiveSearch.$valid &&
        /^[a-zA-Z0-9]*$/.test(self.searchTerm)) {
      $state.go('search', {searchTerm: self.searchTerm});
    }
  };
}]);

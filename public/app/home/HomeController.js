'use strict';

app.controller('HomeController', ['$scope', '$state', 'AdditivesService', function ($scope, $state, AdditivesService) {
  var self = this;

  self.oneAtATime = true;

  AdditivesService.getAll().$promise.then(function (data) {
    self.additives = data.categories;
  });

  self.search = function () {
    if (angular.isDefined(self.searchTerm) && self.additiveSearch.$valid) {
      $state.go('search', {searchTerm: self.searchTerm});
    }
  };
}]);

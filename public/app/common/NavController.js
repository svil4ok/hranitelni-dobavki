'use strict';

app.controller('NavController', ['$scope', 'AdditivesService', function ($scope, AdditivesService) {
  var self = this;

  AdditivesService.getAll().$promise.then(function (data) {
    self.additives = data.categories;
  });
}]);

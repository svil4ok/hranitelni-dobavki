'use strict';

app.controller('NavController', ['AdditivesService', function (AdditivesService) {
  var self = this;

  AdditivesService.getAll().$promise.then(function (data) {
    self.additives = data.categories;
  });
}]);

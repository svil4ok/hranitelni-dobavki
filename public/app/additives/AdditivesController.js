'use strict';

app.controller('AdditivesController', ['$scope', 'additives', function ($scope, additives) {
  var self = this;

  self.additives = additives;
  self.currentTab = 'group-description';

  self.isActiveTab = function (tabName) {
    return tabName === self.currentTab;
  };
}]);

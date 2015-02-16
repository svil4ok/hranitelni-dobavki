'use strict';

app.controller('AdditivesController', ['additives', function (additives) {
  var self = this;

  this.additives = additives;
  this.currentTab = 'group-description';

  this.isActiveTab = function (tabName) {
    return tabName === self.currentTab;
  };
}]);

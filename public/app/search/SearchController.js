'use strict';

app.controller('SearchController', ['$scope', '$state', 'searchTerm', 'additives',
function ($scope, $state, searchTerm, additives) {
  var self = this;
  var resultMessage = 'Не бяха намерени резултати за "' + searchTerm + '"';
  var list = false;

  if (angular.isUndefined(additives.error) && searchTerm) {
    list = true;
    resultMessage = 'Показване на резултати за "' + searchTerm + '"';
  }

  this.list = list;
  this.additives = additives;
  this.resultMessage = resultMessage;

  this.searchSubmit = function () {
    $state.go('search', {searchTerm: self.searchTerm});
  };
}]);

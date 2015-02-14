'use strict';

app.directive('includeReplace', [function () {
  return {
    require: 'ngInclude',
    restrict: 'A',
    link: function (scope, elem) {
      elem.replaceWith(elem.children());
    }
  };
}]);

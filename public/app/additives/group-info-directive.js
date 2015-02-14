'use strict';

app.directive('groupInformation', function () {
  return {
    restrict: 'E',
    link: function (scope, elem, attrs) {
      var tpls = {
        colourings: 'colourings.tpl.html',
        preservatives: 'preservatives.tpl.html'
      };

      attrs.$observe('groupName', function (val) {
        if (!val) {
          return;
        }

        scope.tplUrl = '/data/tpls/' + tpls[val];
      });
    },
    template: '<div ng-include src="tplUrl" include-replace></div>'
  };
});

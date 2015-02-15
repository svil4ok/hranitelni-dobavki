'use strict';

app.directive('groupInformation', function () {
  return {
    restrict: 'E',
    link: function (scope, elem, attrs) {
      var tpls = {
        colourings: 'colourings.tpl.html',
        preservatives: 'preservatives.tpl.html',
        noInfo: 'no-info.tpl.html',
      };

      attrs.$observe('groupName', function (val) {
        if (!val) {
          return;
        }

        if (angular.isUndefined(tpls[val])) {
          scope.tplUrl = '/data/tpls/' + tpls.noInfo;
        }
        else {
          scope.tplUrl = '/data/tpls/' + tpls[val];
        }
      });
    },
    template: '<div ng-include src="tplUrl" include-replace></div>'
  };
});

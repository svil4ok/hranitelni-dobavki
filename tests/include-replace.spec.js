'use strict';

describe('include-replace directive', function () {
  var rootScope, element, e;

  beforeEach(angular.mock.module('HranitelniDobavki'));

  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element(
      '<script type="text/ng-template" id="test.tpl">' +
        '<div id="new-element">' +
          '<span>Element replaced.</span>' +
        '</div>' +
      '</script>' +
      '<tag id="test" data-ng-include src="\'test.tpl\'" include-replace>' +
        '<div id="child-element">Yo!</div>' +
      '</tag>');

    rootScope = $rootScope.$new();
    $compile(element)(rootScope);
    rootScope.$digest();
  }));

  it('should replace the element', function() {
    var expected = '<div id="new-element"><span>Element replaced.</span></div>';

    expect(element.html()).toBe(expected);
  });
});

'use strict';

describe('groupInformation', function () {
  var rootScope, compile, element;

  beforeEach(angular.mock.module('HranitelniDobavki'));

  beforeEach(inject(function ($rootScope, $compile) {
    rootScope = $rootScope.$new();
    compile = $compile;
  }));

  it('should display colourings', inject(function ($templateCache) {
    $templateCache.put('/data/tpls/colourings.tpl.html', 'example content');
    
    element = angular.element('<group-information id="test" group-name="{{ tplName }}" />');
    compile(element)(rootScope);
    rootScope.tplName = 'colourings';
    rootScope.$digest();

    expect(element.text()).toBe('example content');
  }));

  it('should display no info', inject(function ($templateCache) {
    $templateCache.put('/data/tpls/no-info.tpl.html', 'Nothing found here!');
    
    element = angular.element('<group-information id="test" group-name="{{ tplName }}" />');
    compile(element)(rootScope);
    rootScope.tplName = 'non-existence';
    rootScope.$digest();

    expect(element.text().toLowerCase()).toBe('nothing found here!');
  }));

});

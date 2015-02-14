'use strict';

describe('when state change', function () {
  var scope, injector, state;
  var additivesServiceMock;

  beforeEach(angular.mock.module('HranitelniDobavki', function ($provide) {
    $provide.value('AdditivesService', additivesServiceMock = {});
    additivesServiceMock.getAdditive = jasmine.createSpy('getAdditive').and.returnValue({ 'number': 'E100'});
  }));

  beforeEach(function () {
    inject(function ($rootScope, $injector, $state) {
      scope = $rootScope;
      injector = $injector;
      state = $state;
    });
  });

  it('should be home', function() {
    inject(function ($templateCache) {
      $templateCache.put('app/home/home.html', '');
    });

    state.go('home');
    scope.$digest();

    expect(state.current.name).toBe('home');
  });

  it('should be about', function() {
    inject(function ($templateCache) {
      $templateCache.put('app/about/about.html', '');
    });

    state.go('about');
    scope.$digest();

    expect(state.current.name).toBe('about');
  });

  it('should be additives.details', function () {
    var href = state.href('additives.details', { additiveNumber: 'E100' });

    expect(href).toBe('#/additives/view/E100');
  });

  it('should be additives.group', function () {
    var href = state.href('additives.group', { additiveGroup: 'colourings' });

    expect(href).toBe('#/additives/group/colourings');
  });

  it('should resolve data', function () {
    inject(function ($templateCache) {
      $templateCache.put('app/additives/additives-details.html', '');
    });

    state.go('additives.details', {});
    scope.$digest();

    expect(injector.invoke(state.current.resolve.additives)).toEqual({ 'number': 'E100'});;
  });

  it('should redirect to home', function() {
    inject(function ($templateCache) {
      $templateCache.put('app/home/home.html', '');
    });

    expect(state.href('non-existent')).toBeNull();
    scope.$digest();

    expect(state.current.name).toBe('home');
    expect(state.current.controller).toBe('HomeController');
  });
});

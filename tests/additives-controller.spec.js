'use strict';

describe('AdditivesController', function () {
  var rootScope, controller;
  var additivesMock, AdditivesController;

  beforeEach(function () {
    angular.mock.module('HranitelniDobavki', function ($provide) {
      $provide.value('additives', additivesMock = []);
    });

    inject(function () {
      additivesMock = [
        { 'additive': 'test1', 'slug': 'slug1' },
        { 'additive': 'test2', 'slug': 'slug2' },
        { 'additive': 'test3', 'slug': 'slug3' }
      ];
    });
  });

  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    rootScope = $rootScope.$new();
    controller = $controller;

    AdditivesController = $controller('AdditivesController as adtv', {
      $scope: rootScope,
      additives: additivesMock
    });

    rootScope.$digest();
  }));

  it('should exists', function () {
    expect(AdditivesController).toBeTruthy();
  });

  it('should contain all additives', function () {
    expect(rootScope.adtv.additives).toEqual([
      { 'additive': 'test1', 'slug': 'slug1' },
      { 'additive': 'test2', 'slug': 'slug2' },
      { 'additive': 'test3', 'slug': 'slug3' }
    ]);
  });

  it('group-description should be active tab', function () {
    expect(rootScope.adtv.currentTab).toBe('group-description');
    expect(rootScope.adtv.isActiveTab('group-description')).toBeTruthy();
  });

  it('should change active tab', function () {
    rootScope.adtv.currentTab = 'group-list';

    expect(rootScope.adtv.currentTab).toBe('group-list');
    expect(rootScope.adtv.isActiveTab('group-list')).toBeTruthy();
  });
});

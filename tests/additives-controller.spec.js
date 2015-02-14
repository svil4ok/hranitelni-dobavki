'use strict';

describe('AdditivesController', function () {
  var scope, controller;
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
    scope = $rootScope.$new();
    controller = $controller;

    AdditivesController = $controller('AdditivesController', {
      $scope: scope,
      additives: additivesMock
    });

    scope.$digest();
  }));

  it('should exists', function () {
    expect(AdditivesController).toBeTruthy();
  });

  it('should contain all additives', function () {
    expect(scope.additives).toEqual([
      { 'additive': 'test1', 'slug': 'slug1' },
      { 'additive': 'test2', 'slug': 'slug2' },
      { 'additive': 'test3', 'slug': 'slug3' }
    ]);
  });

  it('group-description should be active tab', function () {
    expect(scope.currentTab).toBe('group-description');
    expect(scope.isActiveTab('group-description')).toBeTruthy();
  });

  it('should change active tab', function () {
    scope.currentTab = 'group-list';
    expect(scope.currentTab).toBe('group-list');
    expect(scope.isActiveTab('group-list')).toBeTruthy();
  });
});

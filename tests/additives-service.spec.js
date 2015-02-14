'use strict';

describe('AdditivesService', function() {
  var rootScope, injector;
  var additivesService, additivesDataMock = {};
  var responseMock = { 'categories': [
    {
      'name':'cat1',
      'slug': 'slug1',
      'additives': [
        {'number': 'E560', 'name': 'aliquip' },
        {'number': 'E206', 'name': 'nulla' },
        {'number': 'E418', 'name': 'amet' }
      ]
    },
    {
      'name': 'cat2',
      'slug': 'slug2',
      'additives': [
        {'number': 'E208', 'name': 'ullamco' },
        {'number': 'E276', 'name': 'deserunt' },
        {'number': 'E650', 'name': 'aliqua' }
      ]
    },
    {
      'name': 'cat3',
      'slug': 'slug3',
      'additives': [
        { 'number': 'E776', 'name': 'veniam' },
        { 'number': 'E486', 'name': 'nostrud' },
        { 'number': 'E162', 'name': 'tempor' }
      ]
    }
  ]};

  beforeEach(angular.mock.module('HranitelniDobavki'));

  beforeEach(inject(function ($rootScope, $injector, $q, _AdditivesService_, AdditivesData) {
    rootScope = $rootScope.$new();
    injector = $injector;
    additivesService = _AdditivesService_;

    spyOn(AdditivesData, 'query').and.callFake(function () {
      var deferred = $q.defer();
      deferred.resolve(responseMock);

      return deferred.promise;
    });

    spyOn(additivesService, 'getAll').and.callThrough();
  }));

  it('should exists', function () {
    expect(additivesService).toBeTruthy();
  });

  it('should contain all required functions', function () {
    expect(angular.isFunction(additivesService.getAll)).toBeTruthy();
    expect(angular.isFunction(additivesService.getAdditive)).toBeTruthy();
    expect(angular.isFunction(additivesService.getGroup)).toBeTruthy();
    expect(angular.isFunction(additivesService.searchAdditive)).toBeTruthy();
    expect(angular.isFunction(additivesService.searchGroup)).toBeTruthy();
  });

  it('should call getAll() and return all additives', function () {
    additivesService.getAll().then(function (data) {
      expect(data).toEqual(responseMock);
    });

    expect(additivesService.getAll).toHaveBeenCalled();

    rootScope.$digest();
  });

  it('should call getAdditive() and find an additive', function () {
    additivesService.getAdditive('E208').then(function (data) {
      expect(data.name).toBe('ullamco');
    });
    
    rootScope.$digest();
  });

  it('should call getGroup() and find an additive', function () {
    additivesService.getGroup('slug2').then(function (data) {
      expect(data.name).toBe('cat2');
    });

    rootScope.$digest();
  });

});

'use strict';

describe('SearchController', function () {
  var rootScope, controller, state;

  beforeEach(angular.mock.module('HranitelniDobavki'));

  beforeEach(inject(function ($rootScope, _$controller_, $state) {
    rootScope = $rootScope.$new();
    controller = _$controller_;
    state = $state;
  }));

  describe('when there are additives', function () {
    beforeEach(function () {
      controller('SearchController as srch', {
        $scope: rootScope,
        $state: state,
        searchTerm: 'additive-name',
        additives: [1, 2, 3]
      });
    });

    it('resultMessage should be as expected', function () {
      expect(rootScope.srch.resultMessage).toBe('Показване на резултати за "additive-name"');
    });

    it('additives should be as expected', function () {
      expect(rootScope.srch.additives).toEqual([1, 2, 3]);
    });

    it('"list" should be true', function () {
      expect(rootScope.srch.list).toBeTruthy();
    });
  });

  describe('when there were no additives found', function () {
    beforeEach(function () {
      controller('SearchController as srch', {
        $scope: rootScope,
        $state: state,
        searchTerm: 'additive-name',
        additives: { error: 'Nothing found!' }
      });
    });

    it('resultMessage should be as expected"', function () {
      expect(rootScope.srch.resultMessage).toBe('Не бяха намерени резултати за "additive-name"');
    });

    it('additives should be as expected', function () {
      expect(rootScope.srch.additives).toEqual({ error: 'Nothing found!' });
    });

    it('"list" should be false', function () {
      expect(rootScope.srch.list).toBeFalsy();
    });
  });
});

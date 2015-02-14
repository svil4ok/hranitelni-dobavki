'use strict';

describe("safety filter", function () {
  var $filter, input, result;
  var display = {};

  beforeEach(function (){
    angular.mock.module('HranitelniDobavki');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });

    display = {
      safe: 'безопастни',
      caution: 'съмнителни',
      certain_avoid: 'неподходящи за вегетарианци',
      avoid: 'вредни'
    };
  });

  it('should display safe', function () {
    input = 'safe';
    result = $filter('displaySafety')(input);

    expect(result).toEqual(display.safe);
  });

  it('should display caution', function () {
    input = 'caution';
    result = $filter('displaySafety')(input);

    expect(result).toEqual(display.caution);
  });

  it('should display certain avoid', function () {
    input = 'certain_avoid';
    result = $filter('displaySafety')(input);

    expect(result).toEqual(display.certain_avoid);
  });

  it('should display avoid', function () {
    input = 'avoid';
    result = $filter('displaySafety')(input);

    expect(result).toEqual(display.avoid);
  });

  it('should display caution and certain avoid', function () {
    input = 'caution, certain_avoid';
    result = $filter('displaySafety')(input);

    expect(result).toEqual(display.caution + ', ' + display.certain_avoid);
  });

  it('should be empty string', function () {
    input = 'non-existent-1, non-existent-2';
    result = $filter('displaySafety')(input);

    expect(result).toBeFalsy();
  });
});

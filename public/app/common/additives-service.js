'use strict';

app.factory('AdditivesData', ['$resource', function ($resource) {
  return $resource('../data/hranitelni-dobavki.json', {}, {
    query: {
      method: 'GET',
      isArray: false
    }
  });
}]);



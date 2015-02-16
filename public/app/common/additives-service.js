'use strict';

app.factory('AdditivesData', ['$resource', function ($resource) {
  return $resource('../data/hranitelni-dobavki.json', {}, {
    query: {
      method: 'GET',
      isArray: false
    }
  });
}]);

app.service('AdditivesService', ['AdditivesData', '$q', function (AdditivesData, $q) {
  var self = this;

  this.getAll = function () {
    return AdditivesData.query();
  };

  this.getAdditive = function (additiveNumber) {
    var deferred = $q.defer();

    AdditivesData.query(function (additives) {
      var additive = self.searchAdditive(additives, additiveNumber.toLowerCase());

      if (Object.keys(additive).length > 0) {
        deferred.resolve(additive);
      }
      else {
        deferred.reject();
      }
    });

    return deferred.promise;
  };

  this.getGroup = function (additiveGroup) {
    var deferred = $q.defer();

    AdditivesData.query(function (additives) {
      var group = self.searchGroup(additives, additiveGroup.toLowerCase());

      if (Object.keys(group).length > 0) {
        deferred.resolve(group);
      }
      else {
        deferred.reject();
      }
    });

    return deferred.promise;
  };

  this.search = function (searchFor) {
    var deferred = $q.defer();

    if (!/^[a-zA-Z0-9\u0400-\u04FF]*$/.test(searchFor)) {
      deferred.reject({'error': 'Wrong input data!'});
      return deferred.promise;
    }

    AdditivesData.query(function (additives) {
      var output = [];

      for (var i = additives.categories.length - 1; i >= 0; i -= 1) {
        for (var j = additives.categories[i].additives.length - 1; j >= 0; j -= 1) {
          var number = additives.categories[i].additives[j].number;
          var nameBg = additives.categories[i].additives[j].name_bg;
          var nameEn = additives.categories[i].additives[j].name_en;

          if (self.contains(number, searchFor) ||
              self.contains(nameBg, searchFor) ||
              self.contains(nameEn, searchFor)) {

            var additive = additives.categories[i].additives[j];
            additive.category = {
              name: additives.categories[i].name,
              slug: additives.categories[i].slug
            };

            output.push(additive);
          }
        }
      }

      if (output.length) {
        deferred.resolve(output.reverse());
      }
      else {
        deferred.resolve({'error': 'Nothing found!'});
      }
    });

    return deferred.promise;
  };

  this.searchAdditive = function (additives, additiveNumber) {
    for (var i = additives.categories.length - 1; i >= 0; i -= 1) {
      for (var j = additives.categories[i].additives.length - 1; j >= 0; j -= 1) {
        if (additives.categories[i].additives[j].number.toLowerCase() === additiveNumber) {
          var additive = additives.categories[i].additives[j];
          additive.category = {
            name: additives.categories[i].name,
            slug: additives.categories[i].slug
          };

          return additive;
        }
      }
    }
  };

  this.searchGroup = function (additives, additiveGroup) {
    for (var i = additives.categories.length - 1; i >= 0; i -= 1) {
      if (additives.categories[i].slug === additiveGroup) {
        return additives.categories[i];
      }
    }
  };

  this.contains = function (r, s) {
    return r.toLowerCase().indexOf(s.toLowerCase()) !== -1;
  };
}]);

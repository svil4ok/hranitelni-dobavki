'use strict';

app.controller('SearchController', function ($scope, $state, $stateParams, AdditivesData) {
  var regexp = /^[a-zA-Z0-9]*$/;

  if (!regexp.test($stateParams.searchTerm)) {
    $state.go('home');
  }

  AdditivesData.query(function (additives) {
    angular.forEach(additives.categories, function (category) {
      angular.forEach(category.additives, function (additive) {
        if (angular.equals(additive.number, $stateParams.searchTerm) ||
            angular.equals(additive.name_bg, $stateParams.searchTerm) ||
            angular.equals(additive.name_en, $stateParams.searchTerm)) {
          additive.category = category.name;
          $scope.additivesList.push(additive);
        }
      });
    });
  });

  //$scope.additivesList = results;
  console.log($scope.additivesList);
  $scope.searchTerm = $stateParams.searchTerm;
});


app.directive('searchResults', [function () {
  return {
    scope: {
      results: '='
    },
    restrict: 'E',
    link: function (scope, elem, attrs) {
      console.log('Scope');
      console.log(scope);

      console.log('Elem');
      console.log(elem);

      console.log('Attrs');
      console.log(attrs);
    }
  };
}]);

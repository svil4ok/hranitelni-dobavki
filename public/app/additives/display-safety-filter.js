'use strict';

app.filter('displaySafety', function () {
  return function (safety) {
    if (!safety) {
      return;
    }

    var input = safety.split(',');
    var output = [];

    for (var i = 0; i <= input.length - 1; i += 1) {
      var current = input[i].trim();

      if (current === 'safe') {
        output.push('Безопастни');
      }
      else if (current === 'caution') {
        output.push('Съмнителни');
      }
      else if (current === 'certain_avoid') {
        output.push('Неподходящи за вегетарианци');
      }
      else if (current === 'avoid') {
        output.push('Вредни');
      }
    }

    return output.join(', ').toLowerCase();
  };
});

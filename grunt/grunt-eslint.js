module.exports = function (grunt) {
  grunt.config('eslint', {
    default: {
      options: {
        format: require('eslint-stylish-config')
      },
      src: ['public/app/**/*.js']
    }
  });
};

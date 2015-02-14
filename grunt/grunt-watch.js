module.exports = function (grunt) {
  grunt.config('watch', {
    js: {
      files: ['<%= eslint.default.src %>'],
      tasks: ['jshint', 'eslint', 'uglify']
    },
    sass: {
      files: 'public/assets/scss/**/*.scss',
      tasks: ['sass']
    }
  });
};

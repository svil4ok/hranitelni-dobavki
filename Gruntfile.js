module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Register alias tasks.
  grunt.registerTask('test', ['karma']);

  grunt.registerTask('dev', ['eslint', 'jshint', 'sass', 'uglify', 'watch']);

  grunt.registerTask('build', ['eslint', 'jshint']);

  grunt.registerTask('heroku:production', ['build']);

  grunt.registerTask('default', ['dev']);
};

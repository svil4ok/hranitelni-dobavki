module.exports = function (grunt) {
  grunt.config('sass', {
    options: {
      loadPath: ['public/assets/libs/foundation/scss']
    },
    dist: {
      options: {
        sourcemap: 'none',
        style: 'compressed'
      },
      files: {
        'public/assets/css/styles.min.css': 'public/assets/scss/styles.scss'
      }
    }
  });
};

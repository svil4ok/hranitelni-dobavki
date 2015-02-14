module.exports = function (grunt) {
  grunt.config('uglify', {
    default: {
      options: {
        compress: false,
        mangle: false,
        preserveComments: false,
        nospawn: true
      },
      files: {
        'public/assets/js/angular.min.js': [
          'public/assets/libs/jquery/dist/jquery.min.js',
          'public/assets/libs/angular/angular.js',
          'public/assets/libs/angular-resource/angular-resource.js',
          'public/assets/libs/angular-ui-router/release/angular-ui-router.js'
        ],

        'public/assets/js/foundation.min.js': [
          'public/assets/libs/foundation-apps/js/angular/foundation.js',
          'public/assets/libs/foundation-apps/js/angular/services/**/*.js',
          'public/assets/libs/foundation-apps/js/angular/components/**/*.js',
          'public/assets/libs/foundation-apps/js/angular/vendor/**/*.js',
          //'public/assets/libs/foundation-apps/js/vendor/**/*.js',
        ],

        'public/assets/js/app.min.js': [
          'public/app/app.js',
          'public/app/**/*.js'
          //'public/assets/js/main.js'
        ]
      }
    }
  });
};

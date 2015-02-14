module.exports = function (grunt) {
  grunt.config('jshint', {
    config: {
      options: {
        bitwise:    false,
        browser:    true,
        camelcase:  false,
        curly:      true,
        devel:      true,
        eqeqeq:     true,
        esnext:     true,
        globals: {
          define:   true,
          require:  true,
          console:  true,
          app:        true,
          angular:    true,
          describe:   true,
          it:         true,
          expect:     true,
          beforeEach: true,
          afterEach:  true
        },
        immed:      true,
        indent:     2,
        latedef:    true,
        newcap:     true,
        noarg:      true,
        node:       true,
        noempty:    true,
        nonbsp:     true,
        plusplus:   true,
        quotmark:   'single',
        regexp:     true,
        smarttabs:  false,
        strict:     true,
        trailing:   true,
        undef:      true,
        unused:     true,
        white:      false,

        reporter: require('jshint-stylish-ex')
      },
      src: ['public/app/**/*.js']
    }
  });
};

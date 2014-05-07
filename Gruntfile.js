"use strict";


module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js', 'index.js'
      ]
    },
    mochaTest: {
      test: {
        options: {
          ui: 'exports',
          reporter: 'spec'
        },
        src: [
          'test.js'
        ]
      }
    },
  });


  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('default', [
    'build',
  ]);

};

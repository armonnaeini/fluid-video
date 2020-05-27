/*
 * Vermilion Gruntfile
 * http://vermilion.com
 */

 'use strict';

 /*
 * Grunt Module
 */

//first load grunt
module.exports = function (grunt) {
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    /*tell grunt to compile scss to css w/ same filename*/
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          '_/css/style.css' : '_/scss/style.scss'
        }]
      }
    },
    watch: {
      gruntfile: {
        files: ['gruntfile.js']
      },
      templates: {
        files: ['*.html', '*.php'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      styles: {
        files: ['_/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    }
});



  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['watch']);
}

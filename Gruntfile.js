/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public_html/**/*.js'],
        dest: 'public_html/target/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
    },
    jshint: {
      files: ['Gruntfile.js', 
              'public_html/*.js', 
              'public_html/bower_components/less/dist/less.js',
              'public_html/bower_components/angular/angular.js',
              'public_html/bower_components/angular-ui-router/release/angular-ui-router.js',
              'public_html/bower_components/angular-resource/angular-resource.js',
              'public_html/app/**/*.js', 
              'test/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'karma']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'karma']);
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};

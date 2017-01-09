module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'application/static/scss',
          src: ['style.scss'],
          dest: 'application/static/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      options: {
        noAdvanced: true,
        compatibility: "ie8"
      },
      combine: {
        files: {
          'application/static/css/style.min.css': [
            "application/static/css/normalize.min.css",
            "application/static/css/slick.css",
            "application/static/css/style.css",
          ]
        }
      }
    },
    uglify: {
      js: {
        options: {
        },
        files: {
          'application/static/js/main.min.js': [
            'application/static/js/lib/jquery.min.js',
            'application/static/js/*.js',
            "!application/static/js/main.min.js"
          ]
        }
      }
    },

    watch: {
      css: {
        files: ['application/static/**/*.scss'],
        tasks: ['sass', 'cssmin'] //
      },

      js: {
        files: ['application/static/**/*.js', "!application/static/js/main.min.js"],
        tasks: ['uglify']
      },

    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['style.scss'],
          dest: 'css',
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
          'css/style.min.css': [
            "css/normalize.min.css",
            "css/slick.css",
            "css/style.css",
          ]
        }
      }
    },
    uglify: {
      js: {
        options: {
        },
        files: {
          'js/main.min.js': [
            'js/lib/jquery.min.js',
            'js/*.js',
            "!js/main.min.js"
          ]
        }
      }
    },

    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'cssmin'] //
      },

      js: {
        files: ['**/*.js', "!js/main.min.js"],
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
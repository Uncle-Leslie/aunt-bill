const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: { implementation: sass, sourceMap: true },
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "./css/skeleton.css": "src/scss/skeleton.scss"
                }
            }
        },
        embed: {
          home: {
            options: {
              threshold: '15KB'
            },
            files: {
              './index.html': 'src/index.html',
              './the-shifters.html': 'src/the-shifters.html'
            }
          }
        },
        watch: {
            options: {
                livereload: true,
            },
            styles: {
                files: ['src/scss/**/*.scss','src/*.html'], // which files to watch
                tasks: ['sass','embed'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-embed');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass','embed','watch']);
};

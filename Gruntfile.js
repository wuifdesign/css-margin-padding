module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        css_path:   'dist',
        sass_path:  'src/sass',

        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version + "\\n" %>' +
            '* <%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
            '* <%= pkg.homepage + "\\n" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> - Michael Wohlfahrter <%= "\\n" %>' +
            '*/ <%= "\\n" %>',

        sass: {
            options: {
                sourcemap: 'none',
                style: 'expanded'
            },
            main: {
                files: {
                    '<%= css_path %>/margin-padding.css': '<%= sass_path %>/main.scss'
                }
            }
        },

        cssmin: {
            main: {
                src:  [ '<%= css_path %>/margin-padding.css' ],
                dest: '<%= css_path %>/margin-padding.min.css'
            }
        },

        usebanner: {
            css: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>',
                    linebreak: true
                },
                files: {
                    src: [ '<%= css_path %>/margin-padding.css', '<%= css_path %>/margin-padding.min.css' ]
                }
            }
        },

        watch: {
            sass: {
                files: [ '<%= sass_path %>/*.scss' ],
                tasks: [ 'default' ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'sass', 'cssmin', 'usebanner' ]);
};
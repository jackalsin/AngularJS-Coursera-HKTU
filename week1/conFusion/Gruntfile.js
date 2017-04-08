'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    
    // Define the configuration for all the task
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // makd sure code sytles are up to par and no obvious mistakes
        jshint: {
            options: {
                jshitrc:'.jshitrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src:[
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            }
        }
    });
    
    grunt.registerTask('build', [
        'jshint'
    ]);

    grunt.registerTask('default', ['build']);
};
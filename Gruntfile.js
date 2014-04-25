module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'md',
                    src: '**/*.md',
                    dest: 'html/',
                    ext: '.html',
                }]
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: '**/*.{png,jpg,gif}',
                    dest: 'img/',
                }]
            }
        },

        watch: {
            markdown: {
                files: 'md/**/*.md',
                tasks: ['newer:markdown:all'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks("grunt-newer");

    grunt.registerTask('default', ['imagemin:dist','markdown', 'watch']);
};
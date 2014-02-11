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
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks("grunt-newer");

    grunt.registerTask('default', ['markdown', 'watch']);
};
module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			example: {
				port: 1338,
				base: 'src'
			}
		},
	    watch: {
	      js: {
	        files: ['*.html'],
	        tasks: ['concat:js', 'uglify:js'],
	        options: {
	          livereload: true,
	        }
	      },
	    }

	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect:example');

};
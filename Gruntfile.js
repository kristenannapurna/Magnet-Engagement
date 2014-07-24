module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   		files: {
   		'Dist/style.css' : 'dev/sass/style.scss'
   		}
   	} 	
   }, 
   watch: {
   	css: {
   		files: ['*.scss'],
   		tasks: ['sass', 'autoprefixer']
   	},
   	options: {
   		livereload: true
   	}
   },
   autoprefixer: {
   	options: {
   		browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
   	}, 
   	no_dest: {
   		src: 'Dist/style.css'
   	}
   },
   connect: {
   	server: {
   		options: {
   			port: 9001,
   			base: ''
   		}
   	}
   },
   jade: {
     html : {
      files: {
         'dist/' : ['dev/templates/*.jade']
      },
      options: {
         client: false
      }
     }
   }
 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-jade');


 // Default task(s).
 grunt.registerTask('default', ['connect', 'jade', 'sass', 'watch']);
};
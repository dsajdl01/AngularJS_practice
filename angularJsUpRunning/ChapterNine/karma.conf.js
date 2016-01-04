module.exports = function(config) {
	config.set({

		// base path that will be use to resolve file and exclude
		basePath: '',

		// testing framework to use (jasmine/moch/quit/...)
		frameworks: ['jasmine'],
		files: [ 
			'angular.min.js', 
			'angular-mocks.js',
			'timeAgoFilter.js',
			'timeAgoFilterSpec.js'
		],

		// list of file / patterns to exclude
		exclude:[],

		reporters: ['progress', 'coverage'],


		//web server port
		port: 8080,

		colors: true,

		//level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG

		logLevel: config.LOG_INFO,

		// enabl/ disable watching file and executing tests whenever any changes
		authoWatch: true,


		// preprocessor: {	

		// 	'*.js': ['coverage'],
		// 	'*.js': ['coverage']
		// },

		// Start these browsers, currently available
		// chrome, chromeCanary, Firefox, Opera, safari, PhantomJS
		browsers: ['Chrome'],

		// continue integration mode if true it caprure browser, run test and exits
		singleRun: false, 
	});
};
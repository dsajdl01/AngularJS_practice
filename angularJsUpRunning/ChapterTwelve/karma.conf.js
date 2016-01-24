module.exports = function(config){
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'angular.min.js',
      		'angular-mocks.js',
			'stockDirective.js',
			'stockDirectiveSpec.js'
		],

		exclude:[],
		port: 8080,
		logLevel: config.LOG_INFO,
		authoWatch: true,
		browsers: ['Chrome'],
		singleRun: true 
	});
};

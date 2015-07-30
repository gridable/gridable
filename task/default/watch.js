// watch.js

var gulp = require('gulp'),
	path = require('../path');

gulp.task('watch', ['watch:tasks']);

// Tasks
gulp.task('watch:tasks', function() {

	// Setup
	gulp.watch(path.setup.bower, ['setup:bower']);

	// Styles
	gulp.watch(path.source.style + '**', ['styles:common']);
});

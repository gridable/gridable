// styles.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('styles', ['styles:common']);

// Common
gulp.task('styles:common', function() {
	var name = 'Styles';

	return gulp.src(path.source.style + 'flavor/**/*.scss')
		.pipe($.plumber(helper.error))
		.pipe($.sass())
		.pipe($.autoprefixer())
		.pipe(gulp.dest(path.distribution.style))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});

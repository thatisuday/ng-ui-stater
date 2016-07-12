var 
	gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps')
	gzip = require('gulp-gzip')
;


/*************************************************/

gulp.task('build', function(){
	gulp
	.src(['./src/module.js', './src/parts/**/*.js'])
	.pipe(concat('ui-stater.js'))
	.pipe(sourcemaps.init())
	.pipe(gulp.dest('./dist'))
	.pipe(rename({suffix : '.min'}))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./dist'))
	.pipe(gzip({append:true}))
	.pipe(gulp.dest('./dist'))
	;
});

gulp.task('watch', ['build'], function(){
	gulp.watch('./src/**/*.js', ['build']);
});
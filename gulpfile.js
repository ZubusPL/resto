var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var watch = require('gulp-watch');

var projectName = 'resto';

gulp.task('styles', function() {
	return gulp.src('./src/styles/sass/main.scss')
		.pipe(sass({
			outputStyle: 'nested',
			precision: 10,
			includePaths: ['.'],
      		onError: console.error.bind(console, 'Sass error:')
		}))
		.pipe(csso())
		.pipe(rename(projectName + '.min.css'))
		.pipe(gulp.dest('./build/assets/css'))
});

gulp.task('watch-styles', function() {
	return watch('./src/styles/sass/**/*.scss', function() {
		gulp.src('./src/styles/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'nested',
			precision: 10,
			includePaths: ['.'],
      		onError: console.error.bind(console, 'Sass error:')
		}))
		.pipe(csso())
		.pipe(rename(projectName + '.min.css'))
		.pipe(gulp.dest('./build/assets/css'))
	});
});

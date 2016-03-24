/*global require, console*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

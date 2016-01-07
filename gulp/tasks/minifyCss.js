
var config = require('../config').sass;

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var size = require('gulp-filesize');

gulp.task('minifyCss', function() {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(cssnano())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

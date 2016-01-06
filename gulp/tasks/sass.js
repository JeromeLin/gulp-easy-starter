
var config = require('../config').sass;

var gulp = require('gulp'); 
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest));
});
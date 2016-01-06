
var config = require('../config').lib;

var gulp   = require('gulp');

gulp.task('lib', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
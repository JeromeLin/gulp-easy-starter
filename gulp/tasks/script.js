
var config = require('../config').script;

var gulp   = require('gulp');

gulp.task('script', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
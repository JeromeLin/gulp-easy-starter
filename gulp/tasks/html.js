
var config      = require('../config').html;

var gulp        = require('gulp');
var fileInclude = require('gulp-file-include');

gulp.task('html', function () {
  return gulp.src(config.src)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.dest));  
});
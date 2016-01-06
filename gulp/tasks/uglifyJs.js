
var config = require('../config').script;

var gulp = require('gulp');
var size = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('uglifyJs', function() {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

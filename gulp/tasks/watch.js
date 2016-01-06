
var config = require('../config');

var gulp   = require('gulp');

gulp.task('watch', function () {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.lib.src,  ['lib']);
  gulp.watch(config.script.src, ['script']);
  gulp.watch(config.image.src, ['image']);
});

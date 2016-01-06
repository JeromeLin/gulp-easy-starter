
var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('production', function (cb) {
  process.env.mode = "production";
  gulpSequence([
    'html',
    'lib',
    'minifyCss',
    'uglifyJs',
    'image'
  ])(cb);
});


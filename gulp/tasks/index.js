
var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('default',
  gulpSequence([
    'html',
    'sass',
    'lib',
    'script',
    'image',
    'watch'
  ], 'browserSync')
);

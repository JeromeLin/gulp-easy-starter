
var config      = require('../config');

var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function () {
    
    browserSync(config.browserSync, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    
    var reload = browserSync.reload;
    gulp.watch([config.script.src, config.html.src, config.sass.src]).on('change', reload);
})
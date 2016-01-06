
var config   = require('../config').image;

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('image', function () {
    
    return gulp.src(config.src)
       .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
       .pipe(gulp.dest(config.dest));
});
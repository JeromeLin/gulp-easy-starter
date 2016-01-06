
var src  = './src';
var dest = "./assets";

module.exports = {
  clean: {
    files: [dest]
  },
  html: {
    src: src + "/html/**/*.html",
    dest: dest
  },
  sass: {
    src: src + "/sass/**/*.scss",
    dest: dest + "/stylesheet",
    autoprefixer: {
      browsers: ['iOS >= 6,Android >= 4'],
      cascade: false 
    }
  },
  lib: {
    src: src + "/lib/**/*",
    dest: dest + "/lib"
  },
  image: {
    src: src + "/images/**/*",
    dest: dest + "/images"
  },
  script: {
    src: src + "/js/**/*.js",
    dest: dest + "/js"
  },
  browserSync: {
    server: {
      baseDir: "./assets"
    },
    startPath: 'all.html',
    notify: false
  }
};

var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('html', function() {
  gulp.src(['src/html/**/*.html'])
      .pipe(gulp.dest('output'));
});

gulp.task('webpack', function(callback) {
  webpack(
    require('./webpack.config.js'),
    function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      callback();
    }
  );
});

gulp.task('static', function() {
  gulp.src(['src/static/**/*'], { base: 'src/static' })
      .pipe(gulp.dest('./output/static'));
  gulp.src(['src/manifest.json'], { base: 'src' })
      .pipe(gulp.dest('./output/'));
});

gulp.task('build', ['html', 'webpack', 'static']);

gulp.task('watch', function() {
  gulp.watch("src/html/**/*.html", ['html']);
  gulp.watch("src/js/**/*.js", ['webpack']);
});

gulp.task('default', ['build', 'watch'], function() {
  // pass
});

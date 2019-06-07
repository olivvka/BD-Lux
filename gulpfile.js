var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')

    .pipe(sass({
        outputStyle: 'nested'
      })
      .on("error", sass.logError)
    )

    .pipe(gulp.dest('css'))
});
gulp.task('watch', function() {
  gulp.watch('scss/main.scss', gulp.series("sass"));
});
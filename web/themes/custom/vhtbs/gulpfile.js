var gulp = require('gulp'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass')(require('sass')),
  minifyCSS = require('gulp-csso'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch('scripts/*.js', ['js']);
});


gulp.task('css', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('js', function () {
  return gulp.src('scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('script.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'))
});

gulp.task('default', ['watch']);

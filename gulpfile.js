
let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

let SCSS_SRC = 'app/scss/**/*.scss';
let SCSS_DEST = 'app/css';

gulp.task('compile', function () {

    return gulp.src(SCSS_SRC)
        .pipe(sass())
        .pipe(gulp.dest(SCSS_DEST))
        .pipe(browserSync.stream());

});

gulp.task('serve', function () {

    browserSync.init({
        server: 'app/'
    });

    gulp.watch(SCSS_SRC, gulp.parallel('compile')).on('change', browserSync.reload);

    gulp.watch('app/**/*.html').on('change', browserSync.reload);

});

gulp.task('default', gulp.series('compile', 'serve'));
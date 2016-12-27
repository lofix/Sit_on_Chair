var gulp = require('gulp');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
//var browserSync = require('browser-sync').create();
//var minify = require('gulp-minify');
gulp.task("sass", function () {
    return gulp.src("scss/style.scss").pipe(sass({
        outputStyle: "expanded"
        , errLogToConsole: true
    })).pipe(gulp.dest("css"))
});
gulp.task("watch", function () {
    gulp.watch("scss/*.scss", ["sass"]);
})
gulp.task('sass', function () {
    return gulp.src("scss/style.scss").pipe(sourcemaps.init()).pipe(sass({
        errLogToConsole: true
    })).pipe(sourcemaps.write()).pipe(gulp.dest("css"))
})
//gulp.task("browser-sync", function () {
//    browserSync.init({
//        server: {
//            baseDir: "./"
//        }
//    });
//});
//gulp.task('compress', function () {
//    gulp.src('js/*.js').pipe(minify({
//        ext: {
//            src: '.js'
//            , min: '.min.js'
//        }
//    })).pipe(gulp.dest('js'))
//});
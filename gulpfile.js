var gulp = require('gulp');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function() {
    return gulp.src("scss/style.scss").pipe(sass({
        outputStyle: "expanded",
        errLogToConsole: true
    })).pipe(gulp.dest("css"))
});
gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", ["sass"]);
})
gulp.task('sass', function() {
    return gulp.src("scss/style.scss").pipe(sourcemaps.init()).pipe(sass({
        errLogToConsole: true
    })).pipe(sourcemaps.write()).pipe(gulp.dest("css"))
})

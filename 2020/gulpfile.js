/**
 * Created by pharaoh on 10/1/2018.
 */

'use strict';
const gulp = require('gulp');
const sass = require("gulp-ruby-sass");
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require("gulp-livereload");



gulp.task('style',function () {
    sass('assets/scss/**/*.scss',{ style: 'expanded' })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(livereload());
});

//minify all js to one js file
gulp.task('minscripts', function() {
    return gulp.src(['assets/js/jquery-migrate.js', 'assets/js/jquery.waypoints.min.js','assets/js/popper.js', 'assets/js/bootstrap.min.js','assets/js/wow.min.js','assets/js/bootstrap-progressbar.min.js', 'assets/js/jquery.counterup.min.js','assets/js/slick.min.js', 'assets/js/jquery.magnific-popup.min.js' ,'assets/js/jquery.filterizr.min.js'])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('assets/'));
});

//minify all css to one css file

gulp.task('mincss',function () {
    return gulp.src(['assets/css/bootstrap.min.css','assets/css/animate.min.css','assets/css/et-line.css','assets/css/font-awesome.min.css','assets/css/magnific-popup.css','assets/css/slick.css','assets/css/ionicons.min.css'])
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('assets/'))
});


gulp.task('watch',function () {
    livereload.listen();
    gulp.watch('assets/scss/**/*.scss',['style'])
});

gulp.task('default',['style','watch']);
// Include Gulp & Plugins
var gulp            = require('gulp');
var beep            = require('beepbeep');
var gutil           = require('gulp-util');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var livereload      = require('gulp-livereload');
var lr              = require('tiny-lr');

// Throw a wrench 
    var onError = function (err) {
        gutil.log(gutil.colors.red(err))
        beep(2, 200);
    };

// SCSS Sources
    var scss = ['./source/sass/*.scss'];
    var modules = ['./source/sass/**/*.scss'];
// Compile SASS
    gulp.task('sass', function() {
        return gulp.src(scss)
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulp.dest('./dist/css'));
    });

// JS Sources
    var javascript = ['./source/js/*.js'];
// Compile JavaScript
    gulp.task('js', function() {
        return gulp.src(javascript)
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(uglify())
            .pipe(concat('script.min.js'))
            .pipe(gulp.dest('./dist/js'));
    });

// Watch for changes and reload server
    var server = lr();
    gulp.task('watch', function() {
        var server = livereload();
        gulp.watch(modules, ['sass']);
        gulp.watch(javascript, ['js']);
        gulp.watch(['./dist/css/*.css', './dist/js/*.js', './*.html'], function(e) {
            server.changed(e.path);
        });
    });

// Default task to run all other tasks!
    gulp.task('default', ['sass', 'js', 'watch']);

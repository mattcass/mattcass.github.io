// Include Gulp & Plugins
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var livereload      = require('gulp-livereload');
var lr              = require('tiny-lr');
var server          = lr();

 // SCSS Sources
    var scss = ['./source/sass/*.scss'];
    var modules = ['./source/sass/**/*.scss'];

// Compile SASS
    gulp.task('sass', function() {
        return gulp.src(scss)
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulp.dest('./dist/css'));
    });

// JS Sources
    var javascript = ['./source/js/*.js'];

// Compile JavaScript
    gulp.task('js', function() {
        return gulp.src(javascript)
            .pipe(uglify())
            .pipe(concat('script.min.js'))
            .pipe(gulp.dest('./dist/js'));
    });

// Watch for changes
    gulp.task('watch', function() {
        var server = livereload();
        gulp.watch(modules, ['sass']);
        gulp.watch(javascript, ['js']);
        gulp.watch(['./dist/js/*.js', './*.html', './dist/css/*.css'], function(e) {
            server.changed(e.path);
        });
    });

// Default task to run all other tasks!
    gulp.task('default', ['sass', 'js',  'watch']);



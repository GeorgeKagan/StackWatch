var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyHtml = require('gulp-minify-html');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
gulp.task('sass',function(){
    gulp.src(['app/css/**/*.sass'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(reload({stream:true}))
        .pipe(notify('css task finished'))
});
gulp.task('js',function(){
    gulp.src(['app/js/**/*.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(reload())
        .pipe(notify('js task finished'))
});
gulp.task('html',function(){
    gulp.src(['app/html/**/*.html'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(minifyHtml())
        .pipe(gulp.dest('public/html'))
        .pipe(reload())
        .pipe(notify('html task finished'))
});
gulp.task('image',function(){
    gulp.src(['app/css/images/**/*'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(cache(imageMin()))
        .pipe(gulp.dest('public/css/images'))
        .pipe(reload())
        .pipe(notify('image task finished'))
});
gulp.task('default',function(){
    browserSync.init({
        server: "public"
    });
    gulp.watch('app/js/**/*.js',['js']);
    gulp.watch('app/css/**/*.sass',['sass']);
    gulp.watch('app/html/**/*.html',['html']);
    gulp.watch('app/css/images/**/*',['image']);
});
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
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(reload({stream:true}))
        .pipe(notify('css task finished'))
});
gulp.task('cssBower',function(){
    gulp.src([
        'semantic/dist/semantic.min.css'
    ])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat('bower.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(reload({stream:true}))
        .pipe(notify('css bower task finished'))
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
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(notify('js task finished'))
});
gulp.task('jsBower',function(){
    gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'semantic/dist/semantic.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angularfire/dist/angularfire.min.js',
        'bower_components/firebase/firebase.js',
        'bower_components/lodash/lodash.min.js'
    ])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat('bower.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(notify('js bower task finished'))
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
        .pipe(notify('image task finished'))
});
gulp.task('watch',function(){
    browserSync.init({
        server: "public"
    });
    gulp.watch('app/js/**/*.js',['js']);
    gulp.watch('app/css/**/*.sass',['sass']);
    gulp.watch('app/html/**/*.html',['html']);
    gulp.watch('app/css/images/**/*',['image']);
});
gulp.task('default',['cssBower','sass','jsBower','js','html','image','watch']);
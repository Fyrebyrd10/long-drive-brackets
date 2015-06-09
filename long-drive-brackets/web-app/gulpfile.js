var gulp = require('gulp');
var browserify = require('browserify');
var through2 = require('through2');
var reactify = require('reactify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('buildJS', function() {
    return gulp.src('./js/ldb/app.jsx')
        .pipe(through2.obj(function(file, enc, next) {
            browserify(file.path, {debug: true})
                .transform(reactify)
                .bundle(function(err, res) {
                    if(err) return next(err);

                    file.contents = res;
                    next(null, file);
                });
        }))
        .on('error', function(error){
            console.log(error.stack);
            this.emit('end');
        })
        .pipe(rename('long-drive-brackets.js'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/dist'));
});

gulp.task('default', ['buildJS']);

gulp.task('watch', function() {
    gulp.watch(['js/ldb/*.js', 'js/ldb/**/*.js', 'js/ldb/**/*.jsx'], ['buildJS']);
});

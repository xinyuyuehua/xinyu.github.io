var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var del = require('del');

gulp.task('resize', function () {
    return gulp.src('ow2dmnlmn.bkt.clouddn.com')
        .pipe(imageResize({
            width: 1024,
            imageMagick: true
        }))
        .pipe(gulp.dest('ow2dmnlmn.bkt.clouddn.com'))
        .pipe(imageResize({
            width: 512,
            imageMagick: true
        }))
        .pipe(gulp.dest('ow2dmnlmn.bkt.clouddn.com'));
});

gulp.task('del', ['resize'], function () {
    return del(['images/*.*']);
});

gulp.task('default', ['del']);
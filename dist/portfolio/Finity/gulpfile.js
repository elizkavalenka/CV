let gulp = require('gulp'),
    pug = require('gulp-pug'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync');

    gulp.task('browser-sync', function () {
        browserSync({
            server:{
                baseDir: 'src'
            },
            notify: false
        });
    });

gulp.task('pug', function () {
    return gulp.src('src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('src'))
});

gulp.task('stylus', function(){
    return gulp.src('src/stylus/style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
    gulp.watch('src/*.pug', gulp.parallel('pug'));
    gulp.watch('src/stylus/main.styl', gulp.parallel('stylus'));
});




gulp.task('default', gulp.parallel('stylus', 'browser-sync', 'watch'));
var gulp        = require('gulp'),  
    watchify    = require('watchify'),
    browserify  = require('browserify'),
    babel       = require('babelify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    sourcemaps  = require('gulp-sourcemaps'),
    sass        = require('gulp-sass');


gulp.task('browserify', function() {
    "use strict";

    var bundler;

    bundler = watchify(
        browserify(
            'js/main.js',
            {debug: true}
        )
        .transform(babel)
    );

    return bundler.bundle()
        .on('error', function(err) {
            console.error(err);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['browserify', 'sass']);

gulp.task('watch', function () {
    "use strict";

    gulp.watch('js/*.js', ['browserify']);
    gulp.watch('sass/*.scss', ['sass']);
} );

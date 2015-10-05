var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var concat = require('gulp-concat')
var livereload = require('gulp-livereload');
 
// transpile and concat es6 .jsx files to es5 with babel
// TODO: minify for production
gulp.task('build:jsx', function (){
    return gulp.src('src/jsx/**/*.jsx')
        .pipe(babel())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(livereload());
});
// move html to build folder
gulp.task('build:html', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});
// move css to build folder
gulp.task('build:css', function(){
    return gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});


// delete js files to be replaced
gulp.task('clean:js', function(){
    return del(['public/js/**?*.js']);
});
// delete html files to be replaced
gulp.task('clean:html', function(){
    return del(['public/*.html']);
});
// delete css files to be replaced
gulp.task('clean:css', function(){
    return del(['public/css/**/*.css']);
});

gulp.task('watch', function() {
    // watch and build js
    livereload.listen();
    gulp.watch(['src/jsx/**/*.jsx'], ['clean:js', 'build:jsx']);
    gulp.watch(['src/*.html'], ['clean:html', 'build:html']);
    gulp.watch(['src/css/**/*.css'], ['clean:css', 'build:css']);
});

gulp.task('build:all', ['clean:js', 'build:jsx', 'clean:html', 'build:html', 'clean:html', 'build:html'])

gulp.task('default', ['build:all', 'watch'])

var       gulp = require('gulp'),
       connect = require('gulp-connect');
          sass = require('gulp-ruby-sass');
         watch = require('gulp-watch');
         clean = require('gulp-clean');
        concat = require('gulp-concat');
        uglify = require('gulp-uglify');
     uglifycss = require('gulp-uglifycss');

/* COMPRESS JS */
gulp.task('jsmin', function(){
	 gulp.src('assets/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});



/*COMPRESS CSS */
gulp.task('uglifycss', function(){
	gulp.src('assets/css/*.css')
		.pipe(uglifycss())
		.pipe(gulp.dest('dist/css'));
});


gulp.task('server', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('livereload', function () {
  gulp.src(['assets/css/*.css', 'assets/**/*.js', '*.html'])
      .pipe(watch(['assets/css/*.css', 'assets/js/*.js', '*.html']))
      .pipe(connect.reload());
});

gulp.task('sass', function() {
    return sass('assets/sass/*.scss') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('assets/sass/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'server','uglifycss','livereload', 'watch']);
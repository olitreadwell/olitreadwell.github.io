const gulp = require('gulp');

gulp.task('task1', () => {
  console.log('Hello World');
});

gulp.task('default', ['task1']);

import gulp from 'gulp';
import sequence from 'run-sequence';

export function defaultTask(cb) {
    sequence(
        'clean',
        [
            'styles',
            'scripts',
            'images'
        ]
    , cb);
}

gulp.task('default', defaultTask);

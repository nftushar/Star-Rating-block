import gulp from 'gulp';
import zip from 'gulp-zip';
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';

gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: 'localhost/development'
	});
	gulp.watch(['src/*.js', 'src/*.scss']).on('change', () => browserSync.reload());
});

gulp.task('clean', async () => await deleteAsync(['languages', 'bundled']));

export const bundle = () => gulp.src([
	'**/*',
	'!bundled/**',
	'!node_modules/**',
	'!src/**',
	'!.eslintrc.js',
	'!.gitignore',
	'!gulpfile.mjs',
	'!package.json',
	'!package-lock.json',
	'!readme.md',
	'!todo.txt',
	'!webpack.config.js',
]).pipe(
	zip('text-path.zip')
).pipe(
	gulp.dest('bundled')
);
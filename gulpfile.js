const gulp = require(`gulp`);
const sass = require(`gulp-dart-sass`);

const compileFiles = [`styles/styles.scss`];
const cssFiles = `.`;

gulp.task(`sass`, () => gulp.src(compileFiles)
	.pipe(sass().on(`error`, sass.logError))
	.pipe(gulp.dest(cssFiles)));

gulp.task(`default`, gulp.series(`sass`));

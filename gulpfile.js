const { src, dest, parallel, series, watch } = require('gulp');

const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');

function browsersync(){
    browserSync.init({
        server: {baseDir: 'src/'},
        notify: false,
        online: true
    })
}

function scripts(){
    return src(
        'src/js/script.js'
    )
    .pipe(concat('app.min.js')) 
    .pipe(uglify())
    .pipe(dest('src/js/'))
    .pipe(browserSync.stream())
}


function styles(){
    return src(['src/sass/main.scss'])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss(( { level: { 1: {specialComments : 0 }}, format: 'beautify' } )))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function images(){
    return src('src/img/*')
    .pipe(newer('build/img/'))
    .pipe(imagemin())
    .pipe(dest('build/img/'))
}

function buildcopy(){
    return src([
        'src/css/**/*',
        'src/js/**/*.min.js',
        'src/**/*.html',
        'src/fonts/**/*'
    ], { base: 'src/'})
    .pipe(dest('build'))
}

function startwatch(){
    watch(['src/**/sass/**/*'], styles);
    watch(['src/**/*.js','!src/**/*.min.js'], scripts);
    watch('src/img/**/*', images);
    watch('src/**/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;

exports.build = series (styles, scripts, images, buildcopy);

exports.default = parallel(styles, scripts, browsersync, startwatch)

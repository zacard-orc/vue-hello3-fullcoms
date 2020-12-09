const gulp = require('gulp')
const XEUtils = require('xe-utils')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const prefixer = require('gulp-autoprefixer')

const components = [
  'radio',
  'button',
  'v-x-e-table'
]

const languages = [
  'zh-CN',
  'zh-TC',
  'zh-HK',
  'zh-MO',
  'zh-TW',
  'en-US',
  'ja-JP'
]

gulp.task('build_modules', () => {
  return gulp.src('packages/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('lib'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(gulp.dest('lib'))
})

gulp.task('build_i18n', () => {
  return Promise.all(languages.map(code => {
    const name = XEUtils.camelCase(code).replace(/^[a-z]/, firstChat => firstChat.toUpperCase())
    const isZHTC = ['zh-HK', 'zh-MO', 'zh-TW'].includes(code)
    return gulp.src(`packages/locale/lang/${isZHTC ? 'zh-TC' : code}.js`)
      .pipe(babel({
        moduleId: name,
        presets: ['@babel/env'],
        plugins: ['@babel/transform-modules-umd']
      }))
      .pipe(replace(`global.${name} = mod.exports;`, `global.VXETableLang${name} = mod.exports.default;`))
      .pipe(rename({
        basename: code,
        suffix: '.umd',
        extname: '.js'
      }))
      .pipe(gulp.dest('lib/locale/lang'))
      .pipe(uglify())
      .pipe(rename({
        basename: code,
        suffix: '.min',
        extname: '.js'
      }))
      .pipe(gulp.dest('lib/locale/lang'))
  }))
})

gulp.task('copy_ts', () => {
  return gulp.src('packages/**/*.d.ts')
    .pipe(gulp.dest('lib'))
})

gulp.task('lib_rename', () => {
  return Promise.all([
    gulp.src('lib/index.umd.js')
      .pipe(rename({
        basename: 'index',
        extname: '.js'
      }))
      .pipe(gulp.dest('lib')),
    gulp.src('lib/index.umd.min.js')
      .pipe(rename({
        basename: 'index',
        suffix: '.min',
        extname: '.js'
      }))
      .pipe(gulp.dest('lib'))
  ])
})

gulp.task('build_style', gulp.series('build_modules', 'build_i18n', 'copy_ts', () => {
  return Promise.all(components.map(name => {
    Promise.all([
      gulp.src('styles/index.js')
        .pipe(gulp.dest(`lib/${name}/style`)),
      gulp.src(`styles/${name}.scss`)
        .pipe(replace(/(\/\*\*Variable\*\*\/)/, `@import './variable.scss';\n`))
        .pipe(sass())
        .pipe(prefixer({
          borwsers: ['last 1 version', '> 1%', 'not ie <= 8'],
          cascade: true,
          remove: true
        }))
        .pipe(cleanCSS())
        .pipe(rename({
          basename: 'style',
          extname: '.css'
        }))
        .pipe(gulp.dest(`lib/${name}/style`))
    ])
  }))
}))

gulp.task('build_clean', gulp.series('build_style', 'lib_rename', () => {
  return gulp.src([
    'lib/demo.html'
  ])
    .pipe(clean())
}))

gulp.task('build', gulp.parallel('build_clean'))

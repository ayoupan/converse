// 1 导入gulp这个第三方模块
const gulp=require('gulp');

// 导入gulp-cssmin这个第三方模块
const cssmin=require('gulp-cssmin');

// 导入gulp-autoprefixer这个第三方模块
const autoprefixer=require('gulp-autoprefixer')

// 导入gulp-babel这个第三方模块
const babel=require('gulp-babel')

// 导入gulp-uglify这个第三方模块
const uglify=require('gulp-uglify')

// 导入gulp-htmlmin这个第三方模块
const htmlmin=require('gulp-htmlmin');

// 导入del这个第三方模块
const del = require('del');

// 导入gulp-webserver这个第三方模块
const webserver=require('gulp-webserver')

//  书写一个打包css的方法
const cssHandler=()=>{
	return gulp.src('./src/css/*.css')
	.pipe(autoprefixer())
	.pipe(cssmin())
	.pipe(gulp.dest('./dist/css'))
}
// 书写一个移动images文件夹的方法
const imgHandler = ()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
// 书写一个移动json文件夹的方法
const jsonHandler = ()=>{
    return gulp.src('./src/json/**')
    .pipe(gulp.dest('./dist/json'))
}
// 书写一个移动php文件夹的方法
const phpHandler = ()=>{
    return gulp.src('./src/php/*.php')
    .pipe(gulp.dest('./dist/php'))
}
// 书写一个移动font文件夹的方法
const fontHandler = ()=>{
    return gulp.src('./src/font/**')
    .pipe(gulp.dest('./dist/font'))
}
// 书写一个移动interface文件夹的方法
const interfaceHandler = ()=>{
    return gulp.src('./src/interface/**')
    .pipe(gulp.dest('./dist/interface'))
}

// 书写一个压缩js文件的方法
const jsHandler=()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// 书写一个移动lib文件夹的方法
const libHandler=()=>{
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
// 书写一个压缩html文件的方法
const htmlHandler=()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes:true, //移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把页面里的script标签里面的js代码给去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}
// 书写一个任务,自动删除dist目录
const delHandler=()=>{
    return del(['./dist'])
}
// 书写一个自动监控文件的任务
const watchHandler=()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/lib/**',libHandler)
	gulp.watch('./src/pages/*.html',htmlHandler)
	gulp.watch('./src/interface/**',interfaceHandler)
	gulp.watch('./src/font/**',fontHandler)
	gulp.watch('./src/json/**',jsonHandler)
	gulp.watch('./src/php/**',phpHandler)
}
// 导出一个默认任务
module.exports.default=gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,
        imgHandler,
        jsHandler,
        libHandler,
        htmlHandler,
        phpHandler,
        jsonHandler,
        fontHandler,
        interfaceHandler
    ),
    watchHandler
)
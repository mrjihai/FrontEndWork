var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);
// 加载路由控制
var routes = require('./routes/index');
var settings = require('./settings');
var multer = require('multer');
var fs = require('fs');
var open = require('open');
var accessLog = fs.createWriteStream('./log/access.log', {flags: 'a'});
var errorLog = fs.createWriteStream('./log/error.log', {flags: 'a'});
// 创建项目实例
var app = express();
var port = process.env.PORT || 4000;
var dbUrl = 'mongodb://localhost/blog';

// 定义EJS模板引擎和模板文件位置，也可以使用jade或其他模型引擎
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
// 定义icon图标 favicon in /public
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
// 定义日志和输出级别
app.use(logger('dev'));
app.use(logger({stream: accessLog}));
app.use(function (err, req, res, next) {
  var meta = '[' + new Date() + '] ' + req.url + '\n';
  errorLog.write(meta + err.stack + '\n');
  next();
});
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// 定义cookie解析器
app.use(cookieParser());
// 定义静态文件目录
app.use(express.static(path.join(__dirname, './public')));

app.use(session({
	resave: false,
    saveUninitialized: true,
	secret: settings.cookieSecret,
	key: settings.db, //cookie name
	cookie: {
		maxAge: 1000 * 60 * 60 * 24
	},
	store: new MongoStore({
		//  db: settings.db,
		//  host: settings.host,
		//  port: settings.port
		url: dbUrl
	})
}));

// 匹配路径和路由
routes(app);

// 404错误处理
app.use(function(req, res, next) {
	var err = new Error('404 Not Found');
	err.status = 404;
	next(err);
});

// 错误处理

// 开发环境，500错误处理和错误堆栈跟踪
if(app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// 生产环境，500错误处理
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

app.listen(port);
console.log("server started on port:" + port);
open('http://localhost:' + port);

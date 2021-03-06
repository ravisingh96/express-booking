var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser= require('body-parser')
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');

//Set up mongoose connection

// var mongoDB = 'mongodb://booking_user:w9044472181@ds013579.mlab.com:13579/express_booking';
mongoose.connect(config.database,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookingRouter = require('./routes/booking');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(function(req, res, next) {
  res.removeHeader('X-Powered-By');
  res.header('X-Developed-by', 'Ravi Pratap Singh (An appointment booking app)');
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/booking', bookingRouter);
app.use('/api', api);


app.use(passport.initialize());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

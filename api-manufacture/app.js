var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var MongoDBUtil = require('./modules/mongodb/modules/mongodb/mongodb.module').MongoDBUtil;

///Controllers

var UserController = require('./modules/user/user.module')().UserController;

var ProductController = require('./modules/product/product.module')().ProductController;
var OrderController = require('./modules/order/order.module')().OrderController;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
MongoDBUtil.init();
app.use(cors());


app.use('/users', UserController);
app.use('/products', ProductController);
app.use('/orders', OrderController);

app.get('/', function (req, res) {
  var pkg = require(path.join(__dirname, 'package.json'));
  res.json({
      name: pkg.name,
      version: pkg.version,
      status: 'up'
  });
 });
 

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
  res.json({
    message: res.locals.message,
    error: res.locals.error
  });
 
});

module.exports = app;

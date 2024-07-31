var createError = require('http-errors');
var express = require('express');
var helmet =require("helmet");
var path = require('path');
var rfs = require('rotating-file-stream') // version 2.x

var cookieParser = require('cookie-parser');

var morgan = require('morgan');

var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');


var app = express();
app.use(helmet()); // setting HTTP response headers
app.disable('x-powered-by') // disable server provider 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());// middleware that parses incoming requests with JSON payloads, based on the body-parser library.
app.use(express.urlencoded({ extended: false })); //form submitted makes it accessible via req.body.

app.use(cookieParser());
// console.log('Signed Cookies: ', req.signedCookies)// get cookies from the request

app.use(express.static(path.join(__dirname, 'public')));

// morgan.token('id', function getId (req) {
//   var id = req.id ? req.id: "Guest";
//   return id
// })

var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
})

app.use(morgan('common', { 
  skip: function (req, res) { return res.statusCode < 400 },
  stream: accessLogStream 
  }
))

// nextjs have own routes


// Rest API routes
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);

// Server core route
app.get('/recover', (req, res) => {
  res.render('recover', { title: 'Hey', message: 'Hello there!' })
})



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
  res.render('error', { title: err.status , message: err.message})
  
});

module.exports = app;

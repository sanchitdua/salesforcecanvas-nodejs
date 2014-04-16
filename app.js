/*
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var signed_request = require('./signed_request')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
*/
var express = require('express');
var bodyParser = require('body-parser');
var signed_request = require('./signed_request')
var app = express();

app.use(bodyParser());

app.get('/hello.txt', function(req, res){
  console.log(req);
  res.send('Hello World');
});

app.post('/canvas', function(req, res){
  //console.log(req);

  secret = '9199412244496712486';
  var verifier = new SignedRequest(secret, req.body.signed_request);
  verifier.verified(); // whether or not the signed request verifies
  verifier.data; // the data from the signed request
  res.send(verifier.data);
  res.send('Hello World');
});

//app.set('port', process.env.PORT || 3000);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
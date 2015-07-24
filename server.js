var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var sites = require('./routes/sites')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/sites', sites);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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


/*var http = require('http');
var fs = require('fs');
var getAPI = require('./api/getAPI.js');
var postAPI = require('./api/postAPI.js');
var putAPI = require('./api/putAPI.js');

var server_port = process.env.PORT || 8888;

http.createServer(
	function(request, response) {
		if (getResourceType(request.url) === "api") {
			apiCalls(request, response);
		}
		else {
			resourceCalls(request, response);
		}
	}
).listen(server_port, '0.0.0.0');

function resourceCalls(request, response) {
	var index = fs.readFileSync('index.html');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(index);
}

function apiCalls(request, response) {
	switch(request.method)
	{
		case "GET":
		{
			getAPI.get(request, response);
			break;
		}
		case "POST":
		{
			postAPI.post(request, response);
			break;
		}
		case "PUT":
		{
			putAPI.put(request, response);
			break;
		}
		default:
		{
			response.writeHead(400, {'Content-Type': 'text/html'});
			response.end("Not Found");
		}
	}
}

function getResourceType(requestUrl)
{
	return requestUrl.substr(1).split('/')[0];
}

*/

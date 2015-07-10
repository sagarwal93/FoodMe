var http = require('http');
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



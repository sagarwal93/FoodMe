var user = require('./../models/user.js');
var order = require('./../models/order.js');
var site = require('./../models/site.js');

exports.post = function(request, response) {
	switch(getModel(request.url))
	{
		case "user":
		{
			user.post(request, response);
			break;
		}
		case "order":
		{
			order.post(request, response);
			break;
		}
		case "site":
		{
			site.post(request, response);
			break;
		}
		default:
		{
			response.writeHead(400, {'Content-Type': 'text/html'});
			response.end("Model Not Found");
		}
	}
};

function getModel(requestUrl)
{
	return requestUrl.substr(1).split('/')[1];
}
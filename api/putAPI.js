var user = require('./../models/user.js');

exports.put = function(request, response) {
	switch(getModel(request.url))
	{
		case "user":
		{
			user.put(request, response);
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
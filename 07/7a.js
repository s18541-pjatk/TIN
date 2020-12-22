const http = require('http');
const url = require('url');

const requestListener = function (req, res) {
	const pathname = url.parse(req.url).pathname;
	const number1 = url.parse(req.url, true).query['number1'];
	const number2 = url.parse(req.url, true).query['number2'];

	if(isNaN(parseInt(number1)) || isNaN(parseInt(number2)))
	{
		res.writeHead(400);
		res.end("Bad request!");

	}
	else if(pathname==="/add/")
	{
		res.writeHead(200);
		res.end("Number1: " + number1 + " Number2: " + number2 + " Result: " + (parseInt(number1)+parseInt(number2)));
	}
	else if(pathname==="/sub/")
	{
		res.writeHead(200);
		res.end("Number1: " + number1 + " Number2: " + number2 + " Result: " + (parseInt(number1)-parseInt(number2)));
	}
	else if(pathname==="/mul/")
	{
		res.writeHead(200);
		res.end("Number1: " + number1 + " Number2: " + number2 + " Result: " + (parseInt(number1)*parseInt(number2)));
	}

	else if(pathname==="/div/")
	{
		res.writeHead(200);
		res.end("Number1: " + number1 + " Number2: " + number2 + " Result: " + (parseInt(number1)/parseInt(number2)));
	}
	else
	{
		res.writeHead(404);
		res.end("Operation not found!");
	}
}

const server = http.createServer(requestListener);
server.listen(8080);
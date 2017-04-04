var http = require('http');
var url = require('url');
var fs = require('fs');
var optfile = require('./models/optfile')
http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type':'text/html'
	});
	if (request.url!=="./favicon.ico") {//清除2次访问
	var data = 'There is no rehearsal in the life , once missing , it will be lost forever.';
	fs.writeFile('./views/write.txt', data, function(err) {
    	if (err) {
        	console.log(err);
    	} else {
        	console.log('success.')
    	}
})
	function recall(data) {
		response.write(data);
		response.end('');
	}
	optfile.readfile('./views/write.txt',recall);
	console.log('主程序执行完毕');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');




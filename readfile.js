var http = require('http');
var url = require('url');
var router = require('./router');
var optfile = require('./models/optfile')
http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type':'text/html'
	});
	if (request.url!=="./favicon.ico") {//清除2次访问
	// var pathname = url.parse(request.url).pathname;
	// // pathname = pathname.re
	function recall(data) {
		response.write(data);
		response.end('');
	}
	optfile.readfile('./views/write.txt',recall);
	console.log('主程序执行完毕');
	}
	
}).listen(8000);
	
console.log('Server running at http://127.0.0.1:8000');


//  var fs = require('fs');
//  var data = 'I met my soulmate,she didn’t.';
// writefile:function(path, data, recall) {
// 	fs.writeFile('write.txt', data, function(err) {
// 	    if (err) {
// 	        console.log(err);
// 	    } else { 
// 	        console.log('It\'s saved!');
// 	        recall('写文件成功')；
// 	    }
// 	})

// }




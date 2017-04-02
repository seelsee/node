var http = require('http');
http
	.createServer(function(req,res) {
	res.writeHead(200, {
		'Content-Type':'text/plain'
	});
	res.write("con");
	res.end();
})
	.listen(2015);
 var fs = require('fs');
 var data = 'I met my soulmate,she didn’t.';
writefile:function(path, data, recall) {
	fs.writeFile('write.txt', data, function(err) {
	    if (err) {
	        console.log(err);
	    } else { 
	        console.log('It\'s saved!');
	        recall('写文件成功')；
	    }
	})

}

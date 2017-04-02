var fs = require('fs');
var data = 'I met my soulmate,she didn’t.';
module.exports = {
	// var data = 'I met my soulmate,she didn’t.';
	// writefile:function(path, data, recall) {
	// 	fs.writeFile('write.txt', data, function(err) {
	//    	 	if (err) {
	//         console.log(err);
	//     	} else { 
	//         	console.log('It\'s saved!');
	//         	// recall('写文件成功')；
	//     	}
	// 	});
	// }
	readfile:function(path, recall) {
		fs.readFile(path, function(err, data) {
			if (err) {
				console.log(err);
			}else {
				console.log(data.toString());
				recall(data);
			}

		});
	}
}
// writefile；function(path, data, recall) {
// 	fs.writeFile(path, data, function(err) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log('It\'s saved!');
// 		recall('写文件成功')；
// 	});
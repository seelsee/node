var fs = require('fs');
module.exports = {
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
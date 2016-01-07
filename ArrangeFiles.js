var fs = require('fs'); 
var path = require('path'); 

fs.readdir(process.argv[2], function arrangeFiles(err, array){
	if (err) return console.err(err);
	var fltr = array.filter(function fltrExt(val, index, array){
		return ('.' + process.argv[3] ) == path.extname(val);
	}, array)
	
	fltr.forEach(function printFiles(val, index, array){
		
		console.log(val);
	})
	
});
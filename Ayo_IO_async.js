var fs = require('fs');
var myFileLoc = process.argv[2] ; 



fs.readFile(myFileLoc, function countNL(err, data){
	if (err) return console.err(err); 
	console.log(data.toString().split('\n').length - 1);
}); 
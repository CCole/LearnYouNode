module.exports = function(dirName, ext, fn){

	var fs = require('fs'); 
	var path = require('path'); 
	

	fs.readdir(dirName, function arrangeFiles(err, array){
		if (err) return fn(err);
		var fltr = array.filter(function fltrExt(val, index, array){
		return ('.' + ext ) == path.extname(val);
	}, array)
	
		fn(null, fltr); 
	 
	/*var AF_API = {
		
		read: read,
		filter: fltr
		
	};
	
	return AF_API; */
	
})};
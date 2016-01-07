var myModule = require('./ArrangeFilesModule')

myModule(process.argv[2],process.argv[3],
function printFiles(error,data){
	if (error) console.log(error); 
	data.forEach(function printFiles(val, index, array){
		console.log(val)
	}); 
	 
		
		
	}); 
var http = require('http');

http.get(process.argv[2], function prc(res){
	res.setEncoding('utf8');
	var collection = [] ; 
	res.on('data', function clct(data){
		collection.push(data); 
		
	});
	
	res.on('end', function print_char(){
		var col = collection.join('');
		console.log(col.length);
		console.log(col);
		});
});



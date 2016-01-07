var http = require('http'); 

http.get(process.argv[2], function wrtEvnt(res){
	//var str = response.setEncoding('utf8');
	res.on("data", function prcss(data){
		var strData = data.toString(); 
		console.log(strData);
	});
});



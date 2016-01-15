var http = require('http'); 
var url = require('url');
var port = process.argv[2]; 

var server = http.createServer(function serve(req, res){
    var parsedUrl = url.parse(req.url, true);
    var val = parsedUrl.query ;
    var date = new Date(); 
    date = val.iso; 
   // res = val; 
    console.log(date);
    
});

server.listen(port); 
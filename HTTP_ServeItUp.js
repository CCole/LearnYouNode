var http = require('http'); 
const fs = require('fs'); 
//listen on this port
var port = process.argv[2];
var path = process.argv[3];

//stream response to client with fs.createReadStream() 
//console.log(req); 

var server = http.createServer(function serve(req,res){
    //console.log(req.rawHeaders); 
    var src = fs.createReadStream(path); 
    //console.log(src); 
    src.pipe(res); 
}); 

server.listen(port); 
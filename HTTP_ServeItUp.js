var http = require('http'); 
const fs = require('fs'); 
//listen on this port
var port = process.argv[2];
var req = process.argv[3];

//stream response to client with fs.createReadStream() 
//console.log(req); 

var server = http.createServer(function serve(req,res){
    console.log(req.method); 
    
    
}); 

server.listen(port); 
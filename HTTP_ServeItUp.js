var http = require('http'); 
const fs = require('fs'); 
//listen on this port
var port = process.argv[2];
var request = process.argv[3];

//stream response to client with fs.createReadStream() 
var response = function(){
    fs.createStream();
}

var server = http.createServer(function serve(request,response){
    
}); 

server.listen(port); 
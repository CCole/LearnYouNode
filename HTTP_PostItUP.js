var http = require('http'); 
var port = process.argv[2]; 

var server = http.createServer(function serve (req, res){ 
    if ( req.method == 'POST'){
          req.on('data', function getChunks(chunk){
        
         var upperCaseChunk = chunk.toString().toUpperCase(); 
          res.end(upperCaseChunk);
        
        })
       
        //console.log(req.method); 
    }
    
    
}); 

server.listen(port); 
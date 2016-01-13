var http = require('http'); 
var port = process.argv[2]; 
//var collection = []; 
var count = 0 ; 
var server = http.createServer(function serve (req, res){ 
    if ( req.method == 'POST'){
          count++ 
        
          req.on('data', function getChunks(chunk){
       
         //var upperCaseChunk = chunk.toString().toUpperCase(); 
        // collection.push(chunk); 
         var transform = chunk.toString().toUpperCase(); 
         // console.log(collection); 
         res.end(transform); 
          
           console.log(count)
        })
       
        //console.log(req.method); 
    }
    
    
}); 

server.listen(port); 
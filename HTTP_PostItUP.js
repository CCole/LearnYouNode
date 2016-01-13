var http = require('http'); 
var port = process.argv[2]; 


var server = http.createServer(function serve (req, res){ 
    if ( req.method == 'POST'){
          
        
          req.on('data', function getChunks(chunk){
    
          res.write(chunk.toString('utf-8').toUpperCase());
           
        })
       
       res.setTimeout(1000); 
       
   
    }
    
    
}); 

server.listen(port); 
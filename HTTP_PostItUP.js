var http = require('http'); 
var port = process.argv[2]; 

var server = http.createServer(function serve (req, res){ 
    if ( req.method == 'POST'){
        
        console.log(req.method); 
    }
    
    
}); 

server.listen(port); 
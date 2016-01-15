var http = require('http'); 
var url = require('url');
var port = process.argv[2]; 

var server = http.createServer(function serve(req, res){
  
    var parsedUrl = url.parse(req.url, true);
    var val = parsedUrl.query.iso ;
    var date = new Date(val); 
   // console.log(parsedUrl.pathname);
    
    if (parsedUrl.pathname == '/api/parsetime' ){
    var pack =  JSON.stringify(
            {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "seconds": date.getSeconds()
            }
    );
    
    } else { var pack = JSON.stringify(
        {
        "unixtime": date.getMilliseconds() 
        }
    )}
    //console.log(pack); 
    res.write(pack); 
   res.end(); 
    
});

server.listen(port); 
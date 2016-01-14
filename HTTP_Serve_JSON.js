var http = require('http'); 
var url = require('url');

var server = http.createServer(function serve(req, res){
    var parsedUrl = url.parse(req.url, true);
    var val = parsedUrl.query.iso ;
    
    console.log(val);
});


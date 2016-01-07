var net = require('net'); 

var server = net.createServer(function sendTimeTo(socket){
    var data = Date.now();
    console.log(data); 
})

server.listen(process.argv[2]); 
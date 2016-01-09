var net = require('net');
var bucket = process.argv ; 
var port = bucket[2]; 
var date = new Date(); 
var data = date.toString(); 
//console.log(port);
var server = net.createServer(function handleSocket(socket){
   socket.write(data, function callback(){
       var year = date.getFullYear(); 
       console.log(year);
   });
}); 
server.listen(port);
var net = require('net');
var bucket = process.argv ; 
var port = bucket[2]; 
var date = new Date(); 
var customDate = []; 
       var customTime = [];
       customDate.push(date.getFullYear()); 
       customDate.push('0'+(date.getMonth() + 1));
       customDate.push(date.getDate());
      // console.log(customDate.join('-'));
       
       customTime.push(date.getHours());
       customTime.push(date.getMinutes());
       var data = customDate.join('-') + ' ' + customTime.join(':') + '\n';
//var data = date.toString(); 
//console.log(port);
var server = net.createServer(function handleSocket(socket){
   socket.write(data, function callback(){
       
       socket.end(); 
   })
}); 
server.listen(port);
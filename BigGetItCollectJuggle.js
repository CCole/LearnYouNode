var http = require('http');

//get the urls into an array that I can parse
var bucket = process.argv; 

var urls = bucket.splice(2,5);
var pending = urls.length; 
var asyncData = urls.map(callback, urls); 




function callback(value) {
    

http.get(value, function prc(res){
	       res.setEncoding('utf8');
    
res.on('data', function clct(data){
		   //collecting data concurrently with this callback function
           //when it gets collected in one place its out of order
       // console.log(collection);
      
          console.log(data); 
    
         }).on('end', function count(collection){
            if (--pending !== 0) return 
      
                  
                }); 

});
}
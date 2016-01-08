var http = require('http');

//get the urls into an array that I can parse
var bucket = process.argv; 

var urls = bucket.splice(2,5);
var pending = urls.length; 
//var asyncData = urls.map(asyncCollect, urls); 
urls.forEach(asyncCollect); 
var queue = []; 

function asyncCollect(val, index, urls){
    http.get(val, function process(res){
            var collection = []; 
            res.setEncoding('utf8'); 
            res.on('data', function collect(chunk){
                //collecting data concurrently with this callback function - runs three times 
                collection.push(chunk)
               //console.log(collection); 
               
                return collection; 
                    });
                 
            
            res.on('end', function count(process){
                        queue.splice(pending - 1, 0, collection); 
                      // queue.push(collection);
                       //console.log(queue); 
                       if (--pending !== 0) return
                       
                            function printAsync(val, index, queue){
                            //console.log(queue);  
                            console.log(val.join(''));
                            }
                            
                            queue.forEach(printAsync);
                            
                        }); 

    });
}

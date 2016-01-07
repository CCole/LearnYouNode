var fs = require('fs'); 

var huh = process.argv[3];

//console.log(typeof huh); 

var buf = fs.readFileSync(process.argv[2]); 

var myFile = buf.toString(); 

var myFileArray = myFile.split('\n') ; 

var newLine = (myFileArray.length - 1); 
console.log(newLine); 


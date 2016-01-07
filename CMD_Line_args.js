var bucket = process.argv ; 

bucket.splice(0,2,0,0);
var tot = 0; 
function getTotal(bkt){
	
	bucket.forEach(function(val, index, array) {
	var n = Number(bucket[index]); 
	tot += n; 
	//console.log(tot); 

}) 
console.log(tot); 
}


getTotal(bucket); 



//console.log(tot); 
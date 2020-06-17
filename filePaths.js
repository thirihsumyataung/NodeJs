const path = require('path'); 

//Base FIle name 
console.log(path.basename(__filename)); 

//Directory Name 
console.log(path.dirname(__filename)); 

//File Extension 
console.log(path.extname(__filename)); 

//Create path object 
console.log(path.parse(__filename).base); 

//Concatenate Path 
console.log(path.join(__dirname , 'test' , 'hello.html')); 


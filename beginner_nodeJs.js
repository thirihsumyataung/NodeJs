console.log("Hello from Node JS. "); 

const tutorial = require ('./tutorial'); 
console.log(tutorial); 
console.log(tutorial.sum(1,10), tutorial.divide(9,3));
console.log(tutorial.PI); 
console.log(new tutorial.SomeMathObject());
const sum = (num1, num2) => num1 + num2 ; 
module.exports = sum ; 

const PI = 3.14 ; 
class SomeMathObject { 
    constructor(){ 
        console.log("An object is created.")
    }
}

const divide = ( num1 , num2) => num1 / num2 ; 

//module.exports = {sum , divide}; //To export both functions . 
//module.exports.PI = PI; 
//module.exports.SomeMathObject = SomeMathObject ; 

module.exports = { sum : sum , divide : divide , PI : PI , SomeMathObject}
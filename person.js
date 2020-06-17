// Module wrapper function 
//(function ( exports , require, module, ___filename, ___dirname )); 

/*const person = { 
    name : 'Thiri Hsu Myat Aung', 
    age: 27
}; 

module.exports = person ; 
*/

//Class 

class Person { 
    constructor(name, age) { 
        this.name = name ; 
        this.age = age ; 
    }

    greeting() { 
        console.log(`My name is : ${this.name} and I am ${this.age} years old. `); 
    }
}

module.exports = Person ;  
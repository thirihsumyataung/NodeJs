const EventEmitter = require('events'); 
const eventEmitter = new EventEmitter(); 

eventEmitter.on('tutorial', (num1 , num2) => { 
    console.log(num1 + num2 ); 
    console.log('tutorial event has occours'); 
}); 

eventEmitter.emit('tutorial' , 6 , 4 ); 
class Something extends EventEmitter{ 
    constructor(name)  { 
        super(); 
        this._name = name ; 

    }
    get name(){ 
    return this._name; 
    }
}

let pedro = new Something('Pedro'); 
let christina = new Something('Christina'); 
christina.on('name', ()=> { 
    console.log("My name is " + christina.name );
}); 

//pedro.emit('name'); 
pedro.on('name', ()=> { 
    console.log("My name is " + pedro.name )
}); 

pedro.emit('name'); 
christina.emit('name');

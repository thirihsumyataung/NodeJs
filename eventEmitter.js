const EventEmitter = require ('events'); 
const emitter = new EventEmitter(); 

//Register a listener 
emitter.on('MessageLogged', function (){ 
    console.log('Listener Called!'); 
}); 
emitter.on('Message Log', function (args){ 
    console.log('Second Listener Called! ', args); 
}); 



//Raise an Event 
emitter.emit('MessageLogged'); 
emitter.emit('Message Log', {id: 1 , url: 'http://'}); 




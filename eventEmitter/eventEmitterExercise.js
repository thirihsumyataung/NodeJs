const EventEmitter  = require('events'); 
const emitter = new EventEmitter(); 


emitter.on('weather', function (speed) { 
    var totalSpeed ; 
    var hour = 4; 
   var i ; 
   console.log('----------------------------');
   console.log('Hour\t\tSpeed');
   console.log('----------------------------');

    for ( i = 1 ; i < hour ; i++){ 
        totalSpeed = speed * i; 
        console.log(`${i}\t\t${totalSpeed}`); 
   }

   //var divider = 9 / 5.0 ; 
   //console.log(`Divide: ${divider}. `); 
}); 



//emitter.emit('weather'); 
emitter.emit('weather', 40); 
const EventEmitter = require ('events'); 
const emitter = new EventEmitter(); 


emitter.on('temperature', ()=> { 
    var divider = 9 /5.0 ; 
    var celsius ; 
     var equation ; 
     console.log(`---------------------------`); 
     console.log('Celsius\t\tFerenheit'); 
      
    for ( celsius = 0 ; celsius <= 20 ; celsius ++){ 

         equation = (divider * celsius) +  32 ;
         console.log(`${celsius}\t\t${equation}`);
    }

}); 

emitter.emit('temperature'); 
const http = require('http'); 
const server = http.createServer((req,res) => { 
    if (req.url === '/'){
        console.log('Hello');
        var celsius = 0 ; 
        var farenheit = 0 ; 
        var divide = 9/5.0 ; 

        console.log('----------------------------------');
        console.log('Celsisu\t\t\tFarenheit');
        console.log('----------------------------------');
        res.write('----------------------------------\n');
        res.write('Celsisu\t\t\tFarenheit\n');
        res.write('----------------------------------\n');

        for ( celsius = 0 ; celsius <= 20 ; celsius ++){
            farenheit = (divide * celsius ) + 32 ; 

            console.log(`${celsius}\t\t\t${farenheit}`); 
            res.write(celsius +'\t\t\t' + farenheit + '\n');
        }
        res.end(); 

    }
}); 

server.listen(3000); 
console.log('Listening on port 3000....'); 
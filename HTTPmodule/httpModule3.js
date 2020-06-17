const http = require('http'); 
const server = http.createServer((req,res) => { 
        if (req.url ==='/'){ 
            var total = 0 ; 
            for (var i = 0 ; i < 10 ; i++){ 
                console.log(` ${ i } | `); 
                total = total + i ; 
                res.write(` ${i} | `); 
                

            }
            console.log('Total is : ' + total); 
            res.write("Total is : " + total);
            res.end();  
        }
}); 

server.listen(3000); 
console.log('Listening on port 3000....'); 
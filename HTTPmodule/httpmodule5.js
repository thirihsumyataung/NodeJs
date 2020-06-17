const http = require('http'); 
const server = http.createServer((req,res) =>{ 

   // console.log('Using functions in http module...'); 
    if (req.url === '/'){

        res.write('Using functions in http module...'); 
        function calcuation (speed , hour) { 
            var calc = speed * hour; 
            return calc; 
        }
        var cal1 = calcuation(30,4); 
        console.log(cal1); 
        res.write(cal1); 
    }
}); 

server.listen(3000);
console.log('Listening on port 3000....'); 
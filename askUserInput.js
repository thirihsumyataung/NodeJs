var rl = require ('readline'); 

var prompt = rl.createInterface(process.stdin, process.stdout); 
prompt.question("Number of years you have been working in the cooroprate? " , function (experience) { 
    var msg = " "; 
    if ( experience < 5)
    { 
        msg = "You'are short of "+ (5 - experience) +
        " years experience to attend job interview."; 
    }
    else { 
        msg = "Excellent, you 're eligible for the job interview !!"; 
    }
    console.log(msg); 
    process.exit; 
})

//File System Module 
const fs = require ('fs'); 
const files = fs.readdirSync('./'); 
console.log(files);  // it will print all files .js 


fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Result', files); 
})
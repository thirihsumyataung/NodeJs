class Box { 
    constructor(width , length){ 
        this.width = width ; 
        this.length = length ; 

    }

    area () { 
        var area = this.width * this.length ; 
        console.log(` Rectangle Width is: ${this.width} \n Rectangle length is : ${this.length} \n Area is : ${area}\n`); 
    }
}

module.exports = Box ; 
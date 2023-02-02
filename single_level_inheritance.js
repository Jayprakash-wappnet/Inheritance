                                    //single level inheritance
                                    //this class is parent class whuch have two params and one method 
class Collage {

    constructor(name,location){
        this.name = name ;
        this.location = location ;
            }

    details(){
        return `Collage name is ${this.name} and it is located at ${this.location}`
    }

    printing(){
        console.log("Well come to the collage");
    }

    administrative(){
        console.log(`this is adminstrative department for  branch ${this.name}`);
    }
}
//this is child class which innherits the collage class(parents classs)'s properties
class gecp extends Collage{
    constructor (name,location,principal){
        super(name,location);
        this.principal = principal;

    }


    department(){
        return `the depart name is ${this.name} and it is situated at ${this.location} and the principal name is ${this.principal}`
    }
}

let departm1 = new gecp("CSE","PATAN","H.S.PATEL");
let departm2 = new gecp("E.C","AHEMDABAD","JP DARJI");

console.log(departm1.details());
console.log(departm2.department());
console.log(departm1.name);
console.log(departm2.details());
departm1.printing();
departm2.administrative();
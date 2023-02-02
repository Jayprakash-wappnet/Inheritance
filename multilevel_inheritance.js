//Thi is for oop concept multilevel inheritance and below class is parent class

class Univercity{
    constructor(collageName,location){
        this.collageName = collageName ;
        this.location = location ;
    }

    wellcome(){
        return `WELL COME !!!! to you on GTU official site`
    }

    collageDetails(){
        return`This is ${this.collageName} collage and it is situated at ${this.location}`
    }
}

class gecp extends Univercity{
    constructor(collageName,location,Regno){
        super(collageName,location,);
        this.Regno = Regno ;
    }
    department(){
        return `this is ${this.collageName} and our registration ${this.Regno}`
    }
}

class branch extends gecp{
    constructor(collageName,location,Regno,branchName){
        super(collageName,location,Regno);
        this.branchName = branchName;
    }

    branchinfo(){
        return `this is ${this.branchName} branch from collage ${this.collageName} which registration number is ${this.Regno}`
    }
}

let branch1 = new branch("GEC,PATAN","PATAN","031","CSE");
let branch2 = new branch("LDEC","AHEMDABAD","0011","RUBBER");



console.log(branch1.branchinfo());
console.log(branch2.department());
console.log(branch1.wellcome());
console.log(branch1.collageDetails());



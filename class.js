class Animals{
    constructor(name,ability){
        this.name = name;
        this.ability =ability;
    }
    sing(){
        return `THIS ANIMAL NAME IS ${this.name} and it is able to ${this.ability}`;
    }
    dance(){
        return `THIS ANIMAL NAME IS ${this.name} and it is able to ${this.ability}`;
    }
}
let elephant = new Animals("Ashoka","dance");
let Horse = new Animals("Chetak","sing");
console.log(elephant.name);
console.log(elephant.sing());
console.log(Horse.sing());
console.log(Horse.dance());
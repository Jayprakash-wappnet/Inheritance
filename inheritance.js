/* this is example of Inheritance (multiple inheritance)
This is Parents class which have total two params name,age and two methods*/
class Animals{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sing(){                                                       //this is sing() method 
        return`this animal name is ${this.name} and its age is ${this.age}`
    }

    dance(){                                                     //this is also a method of parents class   
        return`this is  ${this.name} and its age is ${this.age}`
    }
}


/*this is child class which extend the parent class Animals it have three params and one method namely whisjkcolor*/


class Cat extends Animals{
    constructor(name,age,color){
        super(name,age);
        this.color = color;
    }

    whishkercolor(){
        return`the color of whishker is  ${this.color}`
    }

}


//this is a another child class

class dog extends Animals{
    constructor(name,age,gender){
        super(name,age);
        this.gender = gender;
    }

    bark(){
        return `this is ${this.name} and it is barking`
        //return`${}`                                                       //to-do how to call parents mthod in this portion
    }
}

class tiger extends Cat{
    constructor(name,age,tailColor){
        super(name,age);
        this.tailColor = tailColor;
    }
    roar(){
        return `this is tiger whose name is ${this.name} and age is ${this.age} and it is able to loud roar.`
    }
}

let cat1 = new Cat("mili",12,"white");
let cat2 = new Cat("harry",10,"black");
let dog1 = new dog("simbo",5,"Male");
let ekThaTiger = new tiger("Badshah",23,"Orange");
console.log(cat1.whishkercolor());
console.log(cat1.dance());
console.log(dog1.name);
console.log(dog1.bark());
console.log(ekThaTiger.age);
console.log(ekThaTiger.roar());
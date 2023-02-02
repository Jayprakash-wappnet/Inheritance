class Father{
    property(){
        console.log('This is Main property method which inherit by child classes');
    }
}

class son extends Father{
    property(){
        console.log("Thiis is son's property "+this.property());
    }
}

let son1 = new son();
let father1 = new Father();

(son1.property());
(father1.property());
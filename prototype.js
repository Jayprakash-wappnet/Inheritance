Object.prototype.myOwnPrototype = "this is my own prototype"
Object.prototype.myfun = function(){
    return "the fun called"
}
let user = {
    getFullName: function () {
        return this.fname + " " + this.lname
    },
    getAge: function () {
        let age = new Date().getFullYear() - this.birthdate;
        return age
    },


}


let student = {
    fname: "Jayprakash",
    lname: "Darji",
    birthdate: 2002,
    getAge : user.getAge
}
let teacher = {
    fname: "Pinakin",
    lname: "Patel",
    birthdate: 1975,
    getAge : user.getAge
}
student.__proto__ = user;
teacher.__proto__ = user;

console.log(student.getFullName())
console.log(student.getAge())
console.log(teacher.getFullName())

console.log(teacher.getAge())
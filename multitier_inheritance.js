let subject = {
    topic : "JavaScript",
    description : function(){
        console.log("JS IS AMAZING");
    }
}
let course = {
    __proto__ : subject,
    faculty : "jp",

}

let department = {
    __proto__ : course,
    dep_name : "CSE"
    
}


let student = {
    __proto__ : department,
    ID : 13
}

console.log(student.topic);
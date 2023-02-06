/*let student = {
    name : "aryan",
    id : 13,
    address : "Ahemdabad",
    setMarks : function(newMarks){
        if(isNaN(newMarks)){
            throw new Error (`${newMarks} is not a number `)
        }
        marks = newMarks
    }
}
student.setMarks
("nine")
//console.log(student)*/


class student
     {
     
        constructor(rollNo,division){
        
            this.rollNo = rollNo;
            this.division = division;
        }

        detail(location){
        
            this.location = location;
        }

        myfun(){
        
            console.log(` The Student Roll number is : ${this.rollNo}  location is :- ${this.location}`);
        }
     }
     

     let student1 = new student(013,"ahemdabad");
     
     student1.detail("ahemdabad");
     student1.myfun();
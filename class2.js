// create a class  student id, student name,student standard,mark

class Student{
    StdName
    StdId
    StdStandard
    StdMark

    constructor(name,id,standard,mark){
        this.StdName=name
        this.StdId=id
        this.StdStandard=standard
        this.StdMark=mark
    }

    display(){
        console.log(`

        Student name :${this.StdName}
        Student id :${this.StdId}
        Student standard :${this.StdStandard}
        Student mark :${this.StdMark}
        `);
    }

    
}
 
var stud1=new Student(100,'anu',3,'A')
var stud1=new Student(101,'silu',3,'B')
var stud1=new Student(100,'manu',3,'A')
var stud1=new Student(100,'ayisha',3,'B')

stud1.display()
stud1.display()
stud1.display()
stud1.display()
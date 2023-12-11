// how to create a class

// class class-name(class name start with capital letter){

    //properties --define class variable
    //constructor --to intialize class properties
    //function or method --
// }

class Employee{

//properties

    empId
    empName
    empdesig
    salary

//constructor

    constructor(Id,Name,desig,sal){
        this.empId=Id
        this.empName=Name
        this.empDesig=desig
        this.salary=sal
    }
    // function or method
    display(){
        console.log(`
            Employee Id :${this.empId}
            Employee Name :${this.empName}
            Employee desig :${this.empDesig}
            Employee sal :${this.salary}

        `);
    }
}

// object used to access class properties or method outside the class
// syntax object(name)=new classname()

var emp1=new Employee(10,'max','devolper',1000)

emp1.display()
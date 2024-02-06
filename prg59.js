class employeedetails{
                // property
    empName=""
    empSal=""
    empDesgn=""

               // constructor
constructor(name,salary,designation){
    this.empName=name
    this.empSal=salary
    this.empDesgn=designation
}

              //method
              display(){
                console.log(`employee name is ${this.empName}' employee salary is ${this.empSal}, the employee desgination is ${this.empDesgn} `);
              }
}

const obj= new employeedetails("max","20000","designer")
obj.display()

const obj1= new employeedetails("Neel","25000","developer")
obj1.display()
class studentdetails{
    // property
stdName=""
stdRollNo=""
stdClass=""

   // constructor
constructor(name,rollnumber,className){
this.stdName=name
this.stdRollNo=rollnumber
this.stdClass=className
}

  //method
  display(){
    console.log(`student name is ${this.stdName}' roll number is ${this.stdRollNo}, the student course is ${this.stdClass} `);
  }
}
const obj=new studentdetails("Maxwell","25","Science")
obj.display()
const obj1=new studentdetails("Ben","66","Commerce")
obj1.display()
const obj2=new studentdetails("Aswin","45","Science")
obj2.display()
const obj3=new studentdetails("Arjun","12","Hummanitys")
obj3.display()
const obj4=new studentdetails("Alan","19","commerce")
obj4.display()
const obj5=new studentdetails("Jeswin","99","commerce")
obj5.display()

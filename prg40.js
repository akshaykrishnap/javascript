employee =[ 
    //id   name   design   location  salary exp
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//print all employee

for (const emp of employee) {
    console.log(emp[1]);
    
}
console.log('---------');
//print total number of empolyees

console.log(employee.length);

console.log('---------');
//print developer employee details

for (const dev of employee) {
   if (dev[2]=='developer') {
    console.log(dev);
   }
}
console.log('---------');
//print whose salary is greater than 30000
for (const sal of employee) {
    if (sal[4]>30000) {
     console.log(sal);
    }
 }
 console.log('---------');
//print details of employee laisha
for (const name of employee) {
    if (name[1]=='Laisha') {
       console.log(`The details of Laisha is ${name} `); 
    }
 }

//sort employee on bases of their salary in descending order
console.log(`--------------------------`);
ch=[]
for (const salary of employee) {
    if (salary[4]>10000) {
        ch.push(salary[4])
       }
       }
    
        ch.sort((p,q)=>q-p)
       console.log(`Descending order on basis of salary is `);
       console.log(ch);
       

//sort employee on bases of their experince in ascending order
console.log(`--------------------------`);
cha=[]
for (const exp of employee) {
    if (exp[5]>=1) {
        cha.push(exp[5])
       }
       }
        cha.sort((p,q)=>p-q)
       console.log(`Ascending order on basis of  experience is `);
       console.log(cha);

//print the highest salary employee
console.log(`--------------------------`);
highest=ch[0]

for (let high of employee) {
    if (high[4]>=highest) {
      highest=high
    }  
  }
console.log( `The highest salary employee is ${highest}`);
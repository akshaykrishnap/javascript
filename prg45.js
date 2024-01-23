// using array method

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
employee.forEach(emp => {
    console.log(emp[1]);
});
console.log('---------');
//print total number of empolyees
console.log(employee.length);

console.log('---------');


//print developer employee details
ev=employee.filter(emp=>emp[2]=='developer')
console.log(ev);
console.log('---------');


//print whose salary is greater than 30000
even=employee.filter(num=>num[4]>30000)
console.log(even);
console.log('---------');


//print details of employee laisha
e=employee.filter(emp=>emp[1]=='Laisha')
console.log(e);
console.log('---------');


//sort employee on bases of their salary in descending order



employee.sort((p,q)=>q[4]-p[4])
console.log(`Descending order on basis of salary is  `);
console.log(employee);


//sort employee on bases of their experince in ascending order
console.log('---------');
employee.sort((p,q)=>p[5]-q[5])
console.log(`Ascending order on basis of experince is  `);
console.log(employee);


//print the highest salary employee
console.log('---------');
console.log('The hightest salary is:');
console.log(employee.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2));

console.log('---------');

//print the lowest experince employee

console.log('The lowest experience is:');
console.log(employee.reduce((e1,e2)=>e1[5]<e2[5]?e1:e2));

console.log('---------');
//   sum of all salary
console.log('Total salary =');
total=employee.map(f1=>f1[4]).reduce((n1,n2)=>n1+n2)
console.log(total);
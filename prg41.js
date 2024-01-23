// array method -for each()
 //name
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

employee.forEach(emp => {
    console.log(emp[1]);
});
console.log(`--------------------------`);
// array method-map()
// w.a.p.t. print square of the given in the array
a=[10,11,12,12,14,15]
for (const num of a) {
    console.log(num**2);
}
console.log('----or----');
a.forEach(num => {
    console.log(num**2);
});

console.log('----or----');

sq=a.map((num)=>num**2)
console.log(sq);
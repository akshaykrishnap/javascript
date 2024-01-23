// [1000,Neel, devloper,kochi,25000,3]

employeeDetails={
    id: 1000,
    name:'Neel',
    desg:'Developer',
    place:'Kochi',
    sal:25000,
    exp:3

}
console.log(employeeDetails);
// display name
console.log(employeeDetails.name);

console.log('----------or------------');

console.log(employeeDetails["name"]);

//salary
console.log(employeeDetails.sal);

// keywords
console.log('----------or------------');
for (const key in employeeDetails) {
    console.log(key);
        
    }

    // w.a.p.t. print yes if gender key is present else no
if ('gender' in employeeDetails) {
    console.log('present');
} else {
    console.log('not present');
}
console.log('----------or------------');

console.log('gender' in employeeDetails? 'present':'not present');

//how to add key words

//objectname["key"]=value
employeeDetails["gender"]='male'
console.log(employeeDetails);

// update
employeeDetails.exp=5
console.log(employeeDetails);

// add new value to the object  using object 
Object.assign(employeeDetails,{isVaccinated:true})
console.log(employeeDetails);
Object.assign(employeeDetails,{secondVaccinated:true})
console.log(employeeDetails);

//delete
console.log(delete employeeDetails.secondVaccinated);

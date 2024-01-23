//  array method-reduce()
console.log(`----------------`);
//
//
a=[10,2,3,15,30,32,5]

//find highest
highest=a.reduce((n1,n2)=> n1>n2?n1:n2)
console.log(highest);
//find lowest
lowest=a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
//find sum
sum=a.reduce((n1,n2)=>n1+n2)
console.log(sum);

//
// array method-filter()
console.log(`----------------`);
//
a=[10,11,12,13,14,15]
// display all even number from the given array

even=a.filter(num=>num%2==0)
console.log(even);
// w.a.p.t. print numbers greater than
c=a.filter(num=>num>12)
console.log(c);


//
//array method-some()
console.log(`----------------`);
// is there any numbers greater than 12
d=a.some((num)=>num>12)
console.log(d);

console.log(`----------------`);
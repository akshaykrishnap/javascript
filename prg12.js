// w.a.p.t. print 3 digits number is a amrstrong or not 
var a=153
 temp=a
var remainder=0
 var sum=0

console.log(`The given number is amrstrong or not `)
while (a>0) {
    remainder=a%10
    sum=sum + (remainder**3)
a= parseInt(a/10)

}
if (temp===sum) {
    console.log(`The number ${temp} is a amrstrong`);
    
} else {
  console.log(`The number ${temp} is not an amrstong`);  
}

// w.a.p.t. print the factorial of a given number
console.log(`factorial`);

var  b=5
var i=1
 var prod=1
while (i<=b) {
   prod =prod*i
i++
    
}
console.log(`The factorial is ${prod}`);

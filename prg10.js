//// w.a.p.t. print all even num from 1-50

var c=1

while(c<=50){
    if (c%2==0) {
        console.log(c); 
    }

   
    c++
}
console.log('sum=');
// w.a.p.t. sum of 1-10
 var i=1
 var sum=0
 while (i<=10) {
    sum=sum+i
i++
 }
 console.log(sum);

 console.log('next');
 // Input 2     3    4    5
 //Output 24  369   4936

 var d=2
 var e=1
 str=""
 prod= 1
 while (e<=d) {
    str=str+e
  e++  
 }
 console.log(str);
 prod=d*str
 console.log(prod);

 // pattern= 2+22 3+33+333 4+44+444+4444
 console.log('pattern');
 var f=4
strg=""
sum=0
f_sum=0
cout =1
while (cout<=f) {
  strg=strg+f
sum=strg*1
f_sum=f_sum + sum
cout++
}
console.log(f_sum);

// 2nd method for pattern
console.log('pattern 2nd method');
inp =4
i =1
stg=""
sum=0
while (i<=inp) {
 stg=stg+inp
console.log(stg);
 sum=sum+Number(stg)
 i++
}
console.log(sum);
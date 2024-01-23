/// w.ap.t. display a num its reverse order
// 234%10=4 remainder=last digit=123/10
12.3
var a=234
var remainder=0
Reverse =0
console.log(`The given num is ${a} `);

while (a>0) {  //123>0  12>0  1>0  0>0  
  remainder=a%10  // 123%10=3 12%10=2  1%10=1  0%10=0
  Reverse= (Reverse*10)+remainder //  0*10=0+3=3  3*10=30+2  32*10=320+1
  a=parseInt(a/10)  // 123/10=12.3  12/10=1.2  1/10=.1  0/10=0  
}
console.log(`The reverse num is ${Reverse}`);


console.log('Next prb');

// w.a.p.t. a given number is pallindron or not 
console.log(`Pallindrome`);
var b=121
var temp=b
var remainder=0
Reverse =0
console.log(`The given number is pallindrome or not `);

while (b>0) {  //123>0  12>0  1>0  0>0  
  remainder=b%10  // 123%10=3 12%10=2  1%10=1  0%10=0
  Reverse= (Reverse*10)+remainder //  0*10=0+3=3  3*10=30+2  32*10=320+1
  b=parseInt(b/10)  // 123/10=12.3  12/10=1.2  1/10=.1  0/10=0  
}



if (temp==Reverse) {
    console.log(`The number is pallindrome`);
}
else{
    console.log(`THe number is not a pallindrome`);
}
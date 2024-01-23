// w.a.p.t. print all numbers btw 1-50
for ( a = 2; a <=50; a++) {
   count =0
    for(j=1; j<=a;j++){
        if (a%j==0) {
            count++
        }
    }
 if (count==2) {
    console.log(a);
 }
}

console.log(`next -----------------`);
// w.a.p.t. find GCD /HCF of a 2 numbers
var a=15
var b=20
HCF= 0
for ( i = 1; i <=b && i<=a; i++){
if (a%b==0 && b%i==0) {
    HCF =i
}  
}
